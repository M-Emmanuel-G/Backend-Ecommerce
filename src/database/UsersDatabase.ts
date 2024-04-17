import { UpdateRoleUserModel, UpdateUserModes, UserModel } from "../models/usersModel";
import { db } from "../prisma";
import { BaseDatabase } from "./baseDatabase";

export class UsersDatabase extends BaseDatabase{
    addUsers = async ({email, name, password}:UserModel)=>{
        try {
            await db.users.create({
                data:{
                    email,
                    name,
                    password
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllUsers = async ()=>{
        try {
           const result = await db.users.findMany()
           return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateUsers = async ({id, email, name, password}:UpdateUserModes)=>{
        try {
            await db.users.update({
                data:{
                    email,
                    id,
                    name,
                    password,
                },
                where:{
                    id
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getUserRole = async (adminID:string)=>{
        try {
           const result =  await db.users.findUnique({
                where:{
                    id:adminID
                },
                select:{
                    role:true
                }
            })

            return result?.role === "admin"

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateUsersRole = async ({role, userID}:UpdateRoleUserModel)=>{
        try {
            await db.users.update({
                data:{
                    role
                },
                where:{
                    id:userID
                },
            })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getUsers = async (id:string)=>{
        try {
           const result = await db.users.findUnique({
                where:{
                     id 
                }
            })
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteUsers = async (id:string)=>{
        try {
            await db.users.delete({
                    where:{
                    id
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    login = async (email:string)=>{
        try {
            const result = await UsersDatabase.connection.users.findUnique({
                where:{
                    email
                }
            })   

            return result 
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}