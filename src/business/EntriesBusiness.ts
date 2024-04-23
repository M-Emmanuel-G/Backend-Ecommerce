import { BodyNotInserted, PriceNotANumber, QtdNotANumber } from "../customError/AllErrors";
import { EntryNotFound } from "../customError/EntriesError";
import { ProductNotFound } from "../customError/ProductsErrors";
import { SupplierNotFound } from "../customError/supplierError";
import { EntriesDatabase } from "../database/EntriesDatabase";
import { ProductsDatabase } from "../database/productsDatabase";
import { SuppliersDatabase } from "../database/suppliersDatabase";
import { EntriesModel } from "../models/EntriesModel";
import { UpdateProductStockModel } from "../models/productsModel";
import { AuditLog } from "../services/audit";

export class EntriesBusiness{

    entriesDatabase = new EntriesDatabase()
    productsDatabase = new ProductsDatabase()
    supplierDatabase = new SuppliersDatabase()
    auditLog = new AuditLog()

    getAllEntries = async ()=>{
        try {

            const result = await this.entriesDatabase.getAllEntries()
            return result

         } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getEntry = async (id:string)=>{
        try {

            const verifyEntry = await this.entriesDatabase.getEntry(id)
            if(!verifyEntry) throw new EntryNotFound()
          
            const result = await this.entriesDatabase.getEntry(id)
            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
    makeEntries = async (data:EntriesModel)=>{
        try {
          
            if(!data.price || !data.qtd) throw new BodyNotInserted()
            
            if(isNaN(data.price)) throw new PriceNotANumber();
            if(isNaN(data.qtd)) throw new QtdNotANumber();
                    
            const verifyProduct = await this.productsDatabase.getProduct(data.productID)
            const verifySupplier = await this.supplierDatabase.getSupplier(data.supplierID)

            const updateStock:UpdateProductStockModel = {
                productID:data.productID,
                qtdStock : Number(verifyProduct?.qtd_stock) + data.qtd                
            }

            if(!verifyProduct) throw new ProductNotFound()
            if(!verifySupplier) throw new SupplierNotFound()

            const changed = "Nota de entrada adicionada!"

            await this.auditLog.auditLog(changed, data.userID)
                    
            await this.productsDatabase.updateProductStock(updateStock)
            await this.entriesDatabase.makeEntries(data)    

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}