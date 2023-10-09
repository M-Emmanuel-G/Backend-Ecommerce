import { ClientsDatabase } from "../database/client.Database";
import { IdGenerator } from "../services/idGenerator";
import { RandomPassword } from "../services/randomPassword";

export class ClientsBusines{
    clientsDatabase = new ClientsDatabase();


    signUpClient = async (client:any)=>{
        try {
            const {nameClient, cpfClient, passwordClient, phoneClient, emailClient} = client

            if(!nameClient || !passwordClient || !phoneClient || !cpfClient || !emailClient) throw new Error('Todas as informacoes devem ser preenchidas.');

            if(passwordClient.length !== 6 ) throw new Error(" a senha precisa contér 6 caracteres.");
            if(cpfClient.length !== 11) throw new Error("O CPF precisa conter 11 digitos");
            if(nameClient.length < 10) throw new Error("O nome precisa conter no minimo 10 caracteres");
            if(!emailClient.includes('@') || !emailClient.includes('.com')) throw new Error("Formato de email inválido");
            
            

            const verifyCPF = await this.clientsDatabase.getClientByCpf(cpfClient)
            if(verifyCPF.length === 1) throw new Error(`Este CPF ja esta sendo utilizado por outro cliente.`)
            
            
            const verifyPhone = await this.clientsDatabase.getClientByCpf(phoneClient)
            if(verifyPhone.length === 1) throw new Error(`Este telefone ja esta sendo utilizado por outro cliente.`)
            
            const verifyEmail = await this.clientsDatabase.getClientByEmail(emailClient)
            if(verifyEmail.length !== 0) throw new Error("Este email ja esta sendo utilizado por outro cliente.");
            
            
            const idClient = IdGenerator.generate()

            const newClient = {
                idClient,
                nameClient,
                cpfClient,
                passwordClient,
                phoneClient,
                emailClient

            }

            await this.clientsDatabase.signUpClient(newClient)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    loginClient = async(login:any)=>{
        try {
            const{ cpf, password} = login 

            if(!cpf || !password) throw new Error('Todas os campos precisam ser preenchidos.')
            if(cpf.length !== 11) throw new Error('O CPF precisa conter 11 digitos.');
            if(password.length !== 6) throw new Error('A senha precisa conter 6 digitos.');

            const verifyCPF = await this.clientsDatabase.getClientByCpf(cpf)
            if(verifyCPF.length !== 1) throw new Error("Cliente não encontrado.");
            if(verifyCPF[0].client_password !== password) throw new Error("Senha inválida.");

            const client = await this.clientsDatabase.getClientByCpf(cpf)
            return client[0].client_id

            
        } catch (error:any) {
            throw new Error(error.message);
        }
    } 

    getClientByCPF = async(cpf:string)=>{
        try {
            const verifyCPF = await this.clientsDatabase.getClientByCpf(cpf)
            if(verifyCPF.length !== 1) throw new Error("Client nao encontrado");

            const result = await this.clientsDatabase.getClientByCpf(cpf)
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    changePassword = async(email:string)=>{
        try {
            if(!email) throw new Error('Digite seu email')
            if(!email.includes('@') || !email.includes('.com')) throw new Error ('Formato de email inválido.')

            const verifyClient = await this.clientsDatabase.getClientByEmail(email)
            if(verifyClient.length === 0) throw new Error ("Este email nao está cadastrado.")
        
            const newPass = RandomPassword.Generate()
           
            const changePass = {
                newPass:newPass ,
                email:email
            }
            
            const result = newPass
            await this.clientsDatabase.changePassword(changePass)
            return result
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updatePassword = async(newPassword:string, idClient:string)=>{
        try {
           if(!newPassword) throw new Error('Digite uma nova senha')
           if(newPassword.length !== 6 ) throw new Error(" a senha precisa contér 6 caracteres.");

           const verifyClient = await this.clientsDatabase.getClientById(idClient)
           if(verifyClient.length === 0) throw new Error('Cliente nao localizado.')
           if(verifyClient[0].client_password === newPassword) throw new Error('A nova senha não pode ser igual a senha atual.')

           await this.clientsDatabase.updatePassword(newPassword, idClient)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}