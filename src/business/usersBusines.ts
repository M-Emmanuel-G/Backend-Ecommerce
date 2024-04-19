import { BodyNotInserted, EmailAlreadyRegistered, EmailFormat } from "../customError/AllErrors";
import { EmailNotInserted, PasswordNotInserted, PasswordWrong, RoleUserInvalid, RoleUserNotAdmin, RoleUserNotFound, UserNotFound } from "../customError/UserErrors";
import { UsersDatabase } from "../database/UsersDatabase";
import { LoginModel, UpdateRoleUserModel, UpdateRoleUserModelDTO, UpdateUserModelDTO, UpdateUserModes, UserModel } from "../models/usersModel";

export class UserBusiness{
    
    userDatabase = new UsersDatabase()

        addUsers = async ({email, name, password}:UserModel)=>{
            try {
                if(!email || !name || !password) throw new BodyNotInserted();
                if(!email.includes("@") || !email.includes(".com")) throw new EmailFormat();

                const data:UserModel = {
                    email,
                    name,
                    password
                }

                const verifyEmail = await this.userDatabase.getUserEmail(email)
                if(!verifyEmail) throw new EmailAlreadyRegistered();

                await this.userDatabase.addUsers(data)
                
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    
        getAllUsers = async ()=>{
            try {
                const result = await this.userDatabase.getAllUsers()
                return result
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    
        updateUsers = async ({id, email, name, password}:UpdateUserModelDTO)=>{
            try {

                if(!email || !name || !password) throw new BodyNotInserted();
                if(!email.includes("@") || !email.includes(".com")) throw new EmailFormat();

                const verifyUser = await this.userDatabase.getUsers(id)
                if(!verifyUser) throw new UserNotFound();
                
                const updateData:UpdateUserModes = {
                    id,
                    email,
                    name,
                    password
                }

                await this.userDatabase.updateUsers(updateData)

            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    
        updateUsersRole = async ({adminID, role, userID}:UpdateRoleUserModelDTO)=>{
            try {

                if(!role) throw new BodyNotInserted();

                if(role !== "Normal" && role !== "Admin") throw new RoleUserInvalid();
                

                const verifyUserAdmin = await this.userDatabase.getUsers(adminID)
                if(!verifyUserAdmin) throw new RoleUserNotFound()

                const verifyUser = await this.userDatabase.getUsers(userID)
                if(!verifyUser) throw new UserNotFound();

                const verifyAdminRole = await this.userDatabase.getUsers(adminID)
                if(verifyAdminRole?.role !== "admin") throw new RoleUserNotAdmin()
                    
                const data:UpdateRoleUserModel = {
                    role,
                    userID
                }

                await this.userDatabase.updateUsersRole(data)
                
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    
        getUsers = async (id:string)=>{
            try {

                const verifyUser = await this.userDatabase.getUsers(id)
                if(!verifyUser) throw new UserNotFound();

                const result = await this.userDatabase.getUsers(id)
                
                return result

            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    
        deleteUsers = async (id:string)=>{
            try{

                const verifyUser = await this.userDatabase.getUsers(id)
                if(!verifyUser) throw new UserNotFound();

                await this.userDatabase.deleteUsers(id)
                
            } catch (error:any) {
                throw new Error(error.message);
            }
        }

        login = async (data:LoginModel)=>{
            try { 
                
                if(!data.email ) throw new EmailNotInserted();
                if(!data.password ) throw new PasswordNotInserted();
                if(!data.email.includes("@") || !data.email.includes(".com")) throw new EmailFormat()
                const user = await this.userDatabase.login(data.email)
                
                if(!user) throw new UserNotFound()

                if(data.password !== user.password) throw new PasswordWrong();

                return user

            } catch (error:any) {
                throw new Error(error.message);
                
            }
        }
    }