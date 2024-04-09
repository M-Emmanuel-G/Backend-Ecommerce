import { BodyNotInserted, ClientNotFound, EmailFormat } from "../customError/AllErrors";
import { AvailableInvalid} from "../customError/clientsErrors";
import { ClientsDatabase } from "../database/client.Database";
import { ClientsModel, ClientsUpdateModel, updateClientAvailable } from "../models/clientsModel";

export class ClientsBusines{
    clientsDatabase = new ClientsDatabase();

    createClient = async (data:ClientsModel)=>{
        try {
            const {name, address, contact, email} = data

            if(!name || !address || !contact || !email) throw new BodyNotInserted()
            if(!email.includes("@") || !email.includes(".com")) throw new EmailFormat()

        const addData = {
            name,
            address, 
            contact, 
            email
        }

        await this.clientsDatabase.createClient(addData)

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAllClient = async()=>{
        try {
           
            const result = await this.clientsDatabase.getAllClient()
            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateClient = async(data:ClientsUpdateModel)=>{
        try {
            
            const {name, address, contact, email, id } = data

            if(!name || !address || !contact || !email) throw new BodyNotInserted()

            const verifyClient = await this.clientsDatabase.getClient(id)
            if(!verifyClient) throw new ClientNotFound();

            const update:ClientsUpdateModel = {
                name,
                address,
                contact,
                email,
                id
            }
            
            await this.clientsDatabase.updateClient(update)

        } catch (error:any) {
          throw new Error(error.message);
        }
    }

    deleteClient = async(id:string)=>{
        try {
        
            const verifyClient = await this.clientsDatabase.getClient(id)
            if(!verifyClient) throw new ClientNotFound();

            await this.clientsDatabase.deleteClient(id)

        } catch (error:any) {
           throw new Error(error.message);
        }
    }

    getClient = async(id:string)=>{
        try {
           
            const verifyClient = await this.clientsDatabase.getClient(id)
            if(!verifyClient) throw new ClientNotFound();

            const result = await this.clientsDatabase.getClient(id)
            return result

        } catch (error:any) {
           throw new Error(error.message);
        }
    }

    updateClientAvailable = async(data:updateClientAvailable)=>{
        try {

            if(data.available !== true && data.available !== false) throw new AvailableInvalid()        

            const verifyClient = await this.clientsDatabase.getClient(data.id)
            if(!verifyClient) throw new ClientNotFound();

            await this.clientsDatabase.updateClientAvailable(data)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}