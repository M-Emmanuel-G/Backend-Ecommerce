import { BodyNotInserted, CPFExists, CPFLength, ClientNotFound, EmailAlreadyRegistered, EmailExists, EmailFormat, EnterNewPassword, InsertEmail, NameLength, PasswordLength, PasswordWrong, PhoneExists, SamePassword } from "../customError/AllErrors";
import { ClientsDatabase } from "../database/client.Database";
import { IdGenerator } from "../services/idGenerator";
import { RandomPassword } from "../services/randomPassword";

export class ClientsBusines{
    clientsDatabase = new ClientsDatabase();


    // signUpClient = async (client:any)=>{
    //     try {
    //         const {nameClient, cpfClient, passwordClient, phoneClient, emailClient} = client

    //         if(!nameClient || !passwordClient || !phoneClient || !cpfClient || !emailClient) throw new BodyNotInserted()

    //         if(passwordClient.length !== 6 ) throw new PasswordLength()
    //         if(cpfClient.length !== 11) throw new CPFLength()
    //         if(nameClient.length < 10) throw new NameLength()
    //         if(!emailClient.includes('@') || !emailClient.includes('.com')) throw new EmailFormat()
            
            

    //         const verifyCPF = await this.clientsDatabase.getClientByCpf(cpfClient)
    //         if(verifyCPF.length === 1) throw new CPFExists()
            
            
    //         const verifyPhone = await this.clientsDatabase.getClientByCpf(phoneClient)
    //         if(verifyPhone.length === 1) throw new PhoneExists()
            
    //         const verifyEmail = await this.clientsDatabase.getClientByEmail(emailClient)
    //         if(verifyEmail.length !== 0) throw new EmailExists()
            
            
    //         const idClient = IdGenerator.generate()

    //         const newClient = {
    //             idClient,
    //             nameClient,
    //             cpfClient,
    //             passwordClient,
    //             phoneClient,
    //             emailClient

    //         }

    //         await this.clientsDatabase.signUpClient(newClient)

    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // loginClient = async(login:any)=>{
    //     try {
    //         const{ cpf, password} = login 

    //         if(!cpf || !password) throw new BodyNotInserted()
    //         if(cpf.length !== 11) throw new CPFLength();
    //         if(password.length !== 6) throw new PasswordLength();

    //         const verifyCPF = await this.clientsDatabase.getClientByCpf(cpf)
    //         if(verifyCPF.length !== 1) throw new ClientNotFound();
    //         if(verifyCPF[0].client_password !== password) throw new PasswordWrong();

    //         const client = await this.clientsDatabase.getClientByCpf(cpf)
    //         return client 
            

            
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // } 

    // getClientByCPF = async(cpf:string)=>{
    //     try {
    //         const verifyCPF = await this.clientsDatabase.getClientByCpf(cpf)
    //         if(verifyCPF.length !== 1) throw new ClientNotFound();

    //         const result = await this.clientsDatabase.getClientByCpf(cpf)
    //         return result
    //     } catch (error:any) {
    //         throw new Error(error.message);
            
    //     }
    // }

    // changePassword = async(email:string)=>{
    //     try {
    //         if(!email) throw new InsertEmail()
    //         if(!email.includes('@') || !email.includes('.com')) throw new EmailFormat()

    //         const verifyClient = await this.clientsDatabase.getClientByEmail(email)
    //         if(verifyClient.length === 0) throw new EmailAlreadyRegistered()
        
    //         const newPass = RandomPassword.Generate()
           
    //         const changePass = {
    //             newPass:newPass ,
    //             email:email
    //         }
            
    //         const result = newPass
    //         await this.clientsDatabase.changePassword(changePass)
    //         return result
            
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // updatePassword = async(newPassword:string, idClient:string)=>{
    //     try {
    //        if(!newPassword) throw new EnterNewPassword()
    //        if(newPassword.length !== 6 ) throw new PasswordLength()

    //        const verifyClient = await this.clientsDatabase.getClientById(idClient)
    //        if(verifyClient.length === 0) throw new ClientNotFound()
    //        if(verifyClient[0].client_password === newPassword) throw new SamePassword()

    //        await this.clientsDatabase.updatePassword(newPassword, idClient)

    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }
}