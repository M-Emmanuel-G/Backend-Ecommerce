import { BodyNotInserted } from "../customError/AllErrors"
import { SupplierNotFound } from "../customError/supplierError"
import { SuppliersDatabase } from "../database/suppliersDatabase"
import { SupplierModel, UpdateSupplierModel } from "../models/suppliersModel"

export class SuppliersBusiness{

    supplierDatabase = new SuppliersDatabase()

    getAllSuppliers  = async ()=>{
        try {

            const result = await this.supplierDatabase.getAllSuppliers()
            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
    addSuppliers  = async (data:SupplierModel)=>{
        try {

            const { address, cnpj, contact, email, supplier }= data

            if(!address || !cnpj || !contact || !email || !supplier) throw new BodyNotInserted();
            
            await this.supplierDatabase.addSuppliers(data)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getSupplier  = async (id:string)=>{
        try {

            const verifySupplier = await this.supplierDatabase.getSupplier(id)
            if(!verifySupplier) throw new SupplierNotFound();

            const result = await this.supplierDatabase.getSupplier(id)
            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    updateSuppliers  = async (data:UpdateSupplierModel)=>{
        try {

            if(!data.address && !data.contact && !data.email) throw new BodyNotInserted()

            const verifySupplier = await this.supplierDatabase.getSupplier(data.supplierID)
            if(!verifySupplier) throw new SupplierNotFound();

            await this.supplierDatabase.updateSuppliers(data)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    deleteSuppliers  = async (id:string)=>{
        try {

            const verifySupplier = await this.supplierDatabase.getSupplier(id)
            if(!verifySupplier) throw new SupplierNotFound();

            await this.supplierDatabase.deleteSuppliers(id)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}