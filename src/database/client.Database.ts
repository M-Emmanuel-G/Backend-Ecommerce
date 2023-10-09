import { BaseDatabase } from "./baseDatabase";

export class ClientsDatabase extends BaseDatabase{
    TABLE_NAME = 'E_Client'
    signUpClient = async (client:any)=>{
        try {
            const {idClient, nameClient, cpfClient, passwordClient, phoneClient, emailClient} = client

            const newClient = {
                client_id: idClient,
                client_name: nameClient,
                client_cpf: cpfClient,
                client_password: passwordClient,
                client_phone: phoneClient,
                client_email: emailClient
            }

            await ClientsDatabase.connection(this.TABLE_NAME)
                .insert(newClient)
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClient = async (idClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({client_id : idClient})
            return result    
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByCpf = async (cpfClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({client_cpf : cpfClient})
                return result   
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByPhone = async (phoneClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({client_phone : phoneClient})
                return result   
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByEmail = async (emailClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({client_email : emailClient})
                return result   
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientById = async (idClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({client_id : idClient})
                return result   
                
            } catch (error:any) {
                throw new Error(error.message);
            }
        }

    changePassword = async (changePass:any)=>{
        const {newPass, email} = changePass
        
        try {
            await ClientsDatabase.connection(this.TABLE_NAME)
            .update({
                client_password:newPass
            })
            .where(
                {client_email:email}
            )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updatePassword = async(newPassword:string, idClient:string)=>{
        try {
            await ClientsDatabase.connection(this.TABLE_NAME)
                .update(
                    {client_password:newPassword}  
                )
                .where(
                    {client_id:idClient}
                    ) 
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}