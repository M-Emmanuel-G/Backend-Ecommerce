import { SupplierModel, UpdateSupplierModel } from "../models/suppliersModel";
import { BaseDatabase } from "./baseDatabase";

export class SuppliersDatabase extends BaseDatabase{
    getAllSuppliers  = async ()=>{
        try {
            const result = await SuppliersDatabase.connection.suppliers.findMany()
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    addSuppliers  = async (data:SupplierModel)=>{
        try {

            await SuppliersDatabase.connection.suppliers.create({
                data:{
                    Address:data.address,
                    cnpj: data.cnpj,
                    contact:data.contact,
                    email:data.email,
                    supplier: data.supplier
                }
            })
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getSupplier  = async (id:string)=>{
        try {
            const result = await SuppliersDatabase.connection.suppliers.findUnique({
                where:{
                    id
                }
            })

            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    updateSuppliers  = async (data:UpdateSupplierModel)=>{
        try {
            await SuppliersDatabase.connection.suppliers.update({
                data:{
                    supplier:data.supplier,
                    Address:data.address,
                    contact:data.contact,
                    email: data.email
                },
                where:{
                    id:data.supplierID
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    deleteSuppliers  = async (id:string)=>{
        try {
            await SuppliersDatabase.connection.suppliers.delete({
                where:{
                    id
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getSupplierCNPJ  = async (cnpj:string)=>{
        try {
            const result = await SuppliersDatabase.connection.suppliers.findUnique({
                where:{
                    cnpj
                }
            })
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}