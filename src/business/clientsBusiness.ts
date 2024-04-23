import { BodyNotInserted, ClientNotFound, EmailFormat } from "../customError/AllErrors";
import { UserNotFound } from "../customError/UserErrors";
import { AvailableInvalid} from "../customError/clientsErrors";
import { UsersDatabase } from "../database/UsersDatabase";
import { AuditLogDatabase } from "../database/auditLogDatabase";
import { ClientsDatabase } from "../database/client.Database";
import { ClientsModel, ClientsUpdateModel, updateClientAvailable } from "../models/clientsModel";

export class ClientsBusines{
    clientsDatabase = new ClientsDatabase();
    auditDatabase = new AuditLogDatabase()
    usersDatabase = new UsersDatabase()

    createClient = async (data:ClientsModel)=>{
        try {
            const {name, address, contact, email, userID} = data

            if(!name || !address || !contact || !email) throw new BodyNotInserted()
            if(!email.includes("@") || !email.includes(".com")) throw new EmailFormat()

            
            const addData = {
                name,
                address, 
                contact, 
                email,
                userID
            }
            
            
            const verifyUser = await this.usersDatabase.getUserEmail(userID)
            if(!verifyUser) throw new UserNotFound();
            
            const dataAudit:AuditLogModel = {
                changed:"Cliente Adicionado",
                user:verifyUser[0].name,
            }
            
            await this.auditDatabase.createAudit(dataAudit)
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
            
            const {name, address, contact, email, id, available, userID } = data

            if(!name || !address || !contact || !email ) throw new BodyNotInserted()

            const verifyClient = await this.clientsDatabase.getClient(id)
            if(!verifyClient) throw new ClientNotFound();

            const update:ClientsUpdateModel = {
                name,
                address,
                contact,
                email,
                id,
                available,
                userID
            }
            const verifyUser = await this.usersDatabase.getUserEmail(userID)
            if(!verifyUser) throw new UserNotFound();
            
            const dataAudit:AuditLogModel = {
                changed:"Atualização de cliente",
                user:verifyUser[0].name,
            }
            
            await this.auditDatabase.createAudit(dataAudit)
            await this.clientsDatabase.updateClient(update)

        } catch (error:any) {
          throw new Error(error.message);
        }
    }

    deleteClient = async(userID:string, id:string)=>{
        try {
        
            const verifyClient = await this.clientsDatabase.getClient(id)
            if(!verifyClient) throw new ClientNotFound();

            const verifyUser = await this.usersDatabase.getUserEmail(userID)
            if(!verifyUser) throw new UserNotFound();
            
            const dataAudit:AuditLogModel = {
                changed:"Cliente excluido!",
                user:verifyUser[0].name,
            }
            
            await this.auditDatabase.createAudit(dataAudit)

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

            const verifyUser = await this.usersDatabase.getUserEmail(data.userID)
            if(!verifyUser) throw new UserNotFound();
            
            const dataAudit:AuditLogModel = {
                changed:"Atualização de cliente",
                user:verifyUser[0].name,
            }
            
            await this.auditDatabase.createAudit(dataAudit)

            await this.clientsDatabase.updateClientAvailable(data)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}