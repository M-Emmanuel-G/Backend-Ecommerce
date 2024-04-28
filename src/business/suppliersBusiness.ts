import { BodyNotInserted } from "../customError/AllErrors"
import { SupplierNotFound } from "../customError/supplierError"
import { SuppliersDatabase } from "../database/suppliersDatabase"
import { SupplierModel, UpdateSupplierModel } from "../models/suppliersModel"
import { AuditLog } from "../services/audit"

export class SuppliersBusiness{

    supplierDatabase = new SuppliersDatabase()
    auditLog = new AuditLog()

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

            const { address, cnpj, contact, email, supplier, userID }= data

            if(!address || !cnpj || !contact || !email || !supplier) throw new BodyNotInserted();

            const changed = `O fornecedor ${supplier} cadastrado!`

            await this.auditLog.auditLog(changed, userID)
            
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

            const changed = `O fornecedor ${verifySupplier.supplier} Cadastrado!`

            await this.auditLog.auditLog(changed, data.userID)

            await this.supplierDatabase.updateSuppliers(data)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    deleteSuppliers  = async (id:string, userID:string)=>{
        try {

            const verifySupplier = await this.supplierDatabase.getSupplier(id)
            if(!verifySupplier) throw new SupplierNotFound();

            
            const changed = `O fornecedor ${verifySupplier.supplier} foi removido!`
            
            await this.auditLog.auditLog(changed, userID)
            await this.supplierDatabase.deleteSuppliers(id)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}