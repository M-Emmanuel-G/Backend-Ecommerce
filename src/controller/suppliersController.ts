import { Request, Response } from "express";
import { SuppliersBusiness } from "../business/suppliersBusiness";
import { SupplierModel, UpdateSupplierModel } from "../models/suppliersModel";

export class SuppliersController{

    suppliersBusiness = new SuppliersBusiness()

    getAllSupplier = async(req:Request, res:Response)=>{
        try {
            const result = await this.suppliersBusiness.getAllSuppliers()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    addSupplier = async(req:Request, res:Response)=>{
        try {

            const {address, cnpj, contact, email, supplier} = req.body

            const data:SupplierModel = {
                address,
                cnpj,
                contact,
                email,
                supplier
            }

            await this.suppliersBusiness.addSuppliers(data)

            res.status(200).send({message:"Fornecedor adicionado com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getSupplier = async(req:Request, res:Response)=>{
        try {

            const {id } = req.params

            const result = await this.suppliersBusiness.getSupplier(id)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateSupplier = async(req:Request, res:Response)=>{
        try {
         
            const {address, contact, email, supplier} = req.body
            const {id} = req.params

            const data:UpdateSupplierModel = {
                supplier,
                supplierID:id,
                address,
                contact,
                email,
            }

            await this.suppliersBusiness.updateSuppliers(data)

            res.status(200).send({message:"Os dados do fornecedor foram atualizados com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteSupplier = async(req:Request, res:Response)=>{
        try {

            const {id} = req.params

            await this.suppliersBusiness.deleteSuppliers(id)
            res.status(200).send({message:"O fornecedor foi removido com sucesso!"})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}