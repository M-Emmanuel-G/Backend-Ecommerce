import { BodyNotInserted, ClientNotFound } from "../customError/AllErrors"
import { ProductNotFound } from "../customError/ProductsErrors"
import { ClientNotAuthorized } from "../customError/clientsErrors"
import { OutputNotFound, QtdFormat, QtdInsufficient, QtdStock } from "../customError/outputProductsError"
import { ClientsDatabase } from "../database/client.Database"
import { OutPutDatabase } from "../database/outputDatabase"
import { ProductsDatabase } from "../database/productsDatabase"
import { OutPutProductsModel, OutPutProductsModelDTO, UpdateOutPutProductsModel } from "../models/OutPutProductsModel"
import { AuditLog } from "../services/audit"
import { DateGenerator } from "../services/dateGenertor"

export class OutputBusiness{

    outputDatabase = new OutPutDatabase()
    productsDatabase = new ProductsDatabase()
    clientsDatabase = new ClientsDatabase()
    auditLog = new AuditLog()

    makeStockOutput = async(data:OutPutProductsModelDTO)=>{
        try {

            if(!data.qtd) throw new BodyNotInserted()

            const verifyProduct = await this.productsDatabase.getProduct(data.productID)
            if(!verifyProduct) throw new ProductNotFound();

            if(verifyProduct.qtd_stock <= 0) throw new QtdStock();
            if(data.qtd > verifyProduct.qtd_stock) throw new QtdInsufficient();
             

            const verifyClient = await this.clientsDatabase.getClient(data.clientID)
            if(!verifyClient) throw new ClientNotFound();
            if(verifyClient.available === false) throw new ClientNotAuthorized();
            

            const updateStock:UpdateOutPutProductsModel = {
                productID: data.productID,
                qtdStock: verifyProduct.qtd_stock - data.qtd
            }
            
            const newData:OutPutProductsModel = {
                clientID:data.clientID,
                date:DateGenerator.dateNow(),
                productID:data.productID,
                qtd:data.qtd
            }

            const changed = `Nota de saida do produto ${verifyProduct.product} adicionada!`

            await this.auditLog.auditLog(changed, data.userID)
            
            await this.productsDatabase.updateProductStock(updateStock)
            await this.outputDatabase.makeStockOutput(newData)
          
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getOutputByCOD = async(cod:number)=>{
        try {

            if(isNaN(cod)) throw new QtdFormat();

            const verifyCOD = await this.outputDatabase.getOutputByCOD(cod)
            if(!verifyCOD) throw new OutputNotFound()

            const result = await this.outputDatabase.getOutputByCOD(cod)
            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getAllStockOutputs = async ()=>{
        try {
          const result = await this.outputDatabase.getAllStockOutputs()
          return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}