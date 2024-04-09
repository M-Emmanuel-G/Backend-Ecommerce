import { Request, Response } from "express";
import { ClientsModel, ClientsUpdateModel, updateClientAvailable } from "../models/clientsModel";
import { ClientsBusines } from "../business/clientsBusiness";

export class ClientsController{
    clientsBusiness = new ClientsBusines();

    createClient = async (req:Request, res:Response)=>{
        try {
            const {name, address, contact, email} = req.body
            
            const data:ClientsModel = {
                address,
                name,
                contact,
                email
            }

            await this.clientsBusiness.createClient(data)

            res.status(200).send({message:"Cliente Cadastrado com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message);
            
        }
    }

    getAllClient = async(req:Request, res:Response)=>{
        try {
           
            const result = await this.clientsBusiness.getAllClient()
            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateClient = async(req:Request, res:Response)=>{
        try {
           
            const {name, address, contact, email} = req.body
            const {id} = req.params

            const data:ClientsUpdateModel = {
                address,
                contact,
                email,
                id,
                name,
            }

            await this.clientsBusiness.updateClient(data)

            res.status(200).send({message:"Cliente atualizado com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteClient = async(req:Request, res:Response)=>{
        try {

            const {id} = req.params
            await this.clientsBusiness.deleteClient(id)
           
            res.status(200).send({message:"Cliente excluido com sucesso!"})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getClient = async(req:Request, res:Response)=>{
        try {
           
            const {id} = req.params

            const result = await this.clientsBusiness.getClient(id)

            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateClientAvailable = async(req:Request, res:Response)=>{
        try {

            const {available} = req.body
            const {id} = req.params

            const data:updateClientAvailable = {
                available,
                id
            }

            await this.clientsBusiness.updateClientAvailable(data)

            res.status(200).send({message:"Disponibilidade alterada com sucesso!"})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    } 

}