import { ClientsModel, ClientsUpdateModel, updateClientAvailable } from "../models/clientsModel";
import { UsersDatabase } from "./UsersDatabase";
import { BaseDatabase } from "./baseDatabase";

export class ClientsDatabase extends BaseDatabase{

    createClient = async (data:ClientsModel)=>{
        try {

            const {name, address, contact, email} = data

            await ClientsDatabase.connection.clients.create({
                data:{
                    address,
                    contact,
                    email,
                    name
                }
            })
           

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAllClient = async()=>{
        try {
           
          const result = await ClientsDatabase.connection.clients.findMany()
          return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateClient = async(data:ClientsUpdateModel)=>{
        try {
            const {name, address, contact, email, id, available } = data

            await ClientsDatabase.connection.clients.update({
                data:{
                    address,
                    contact,
                    email,
                    name,
                    available
                },

                where:{
                    id
                }
            })

        } catch (error:any) {
          throw new Error(error.message);
        }
    }

    deleteClient = async(id:string)=>{
        try {
           
            await ClientsDatabase.connection.clients.delete({
                where:{
                    id
                }
            })

        } catch (error:any) {
           throw new Error(error.message);
        }
    }

    getClient = async(id:string)=>{
        try {
           const result = await ClientsDatabase.connection.clients.findUnique({
            where:{
                id
            }
           })
           return result

        } catch (error:any) {
           throw new Error(error.message);
        }
    }

    updateClientAvailable = async(data:updateClientAvailable)=>{
        try {

            await ClientsDatabase.connection.clients.update({
                data:{
                    available: data.available
                },
                where:{
                    id: data.id
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}