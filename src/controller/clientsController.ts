import { Request, Response } from "express";
import { ClientsBusines } from "../business/clientsBusiness";

export class ClientsController{
    clientsBusiness = new ClientsBusines();

    signUpClient = async (req:Request, res:Response)=>{
        try {
            const {nameClient, cpfClient, passwordClient, phoneClient, emailClient} = req.body

            const newClient = {
                nameClient,
                cpfClient,
                passwordClient,
                phoneClient,
                emailClient
            }

            await this.clientsBusiness.signUpClient(newClient)
            res.status(201).send({message:'Cliente cadastrado com sucesso..'})

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    loginClient = async(req:Request, res:Response)=>{
        try {
            const { cpf, password} = req.body

            const login = {
                cpf,
                password
            }

            const result = await this.clientsBusiness.loginClient(login)
            res.status(200).send({message:"Cliente Logado com sucesso.", result})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getClientByCPF = async (req:Request, res:Response)=>{
        try {
            const {cpf} = req.params

            const result =  await this.clientsBusiness.getClientByCPF(cpf)

            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message);
            
        }
    }

    changePassword = async (req:Request, res:Response)=>{
        try {
            const {email} = req.body

            const result = await this.clientsBusiness.changePassword(email)
            res.status(200).send({message:"Uma nova senha foi enviada para o seu email...", result})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    updatePassword = async(req:Request, res:Response)=>{
        try {
            const {newPassword} = req.body
            const {idClient}= req.params
            
            await this.clientsBusiness.updatePassword(newPassword, idClient)
            res.status(200).send({message:"Sua senha foi alterada com sucesso..."})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}