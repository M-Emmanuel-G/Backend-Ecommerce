import { Request, Response } from "express";
import { UserBusiness } from "../business/usersBusines";
import { LoginModel, UpdateRoleUserModelDTO, UpdateUserModelDTO, UserModel } from "../models/usersModel";

export class UserController{
    userBusiness = new UserBusiness()

    addUsers = async (req:Request, res:Response)=>{
        try {

            const {email, name, password} = req.body

            const body:UserModel = {
                email,
                name,
                password
            }

            await this.userBusiness.addUsers(body)

            res.status(201).send({message:"Usuario criado com sucesso!"})
           
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAllUsers = async (req:Request, res:Response)=>{
        try {

            const result = await this.userBusiness.getAllUsers()
            res.status(201).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateUsers = async (req:Request, res:Response)=>{
        try {
           
            const {email, name, password} = req.body
            const {userID} = req.params

            const body:UpdateUserModelDTO = {
                email,
                name,
                password,
                id:userID
            }

            await this.userBusiness.updateUsers(body)

            res.status(200).send({message:"Usuario atualizado com sucesso!"})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateUsersRole = async (req:Request, res:Response)=>{
        try {
            
            const {role} = req.body
            const {adminID, userID} = req.params

            const body:UpdateRoleUserModelDTO = {
                adminID,
                role,
                userID
            }

            await this.userBusiness.updateUsersRole(body)
            res.status(200).send("Tipo de usuário editado com sucesso!")

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getUsers = async (req:Request, res:Response)=>{
        try {
           const { userID } = req.params

           const result = await this.userBusiness.getUsers(userID)
           res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteUsers = async (req:Request, res:Response)=>{
        try {
            const { userID } = req.params

            await this.userBusiness.deleteUsers(userID)
            res.status(200).send({message:"Usuário excluido com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    login = async (req:Request, res:Response)=>{
        try {
            
            const {email} = req.body

            const body:LoginModel = {
                email,
            }

            const result = await this.userBusiness.login(body)

            res.status(200).send({message:"Login realizado com sucesso!", result})

        } catch (error:any) {
           res.status(400).send(error.message)
        }
    }
}