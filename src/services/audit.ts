import { UserNotFound } from "../customError/UserErrors"
import { UsersDatabase } from "../database/UsersDatabase"
import { AuditLogDatabase } from "../database/auditLogDatabase"
import { AuditLogModel } from "../models/auditModel"

export class AuditLog{

    auditDatabase = new AuditLogDatabase()
    usersDatabase = new UsersDatabase()

    auditLog = async (changed:string, userID:string)=>{
        try {

            const verifyUser = await this.usersDatabase.getUserID(userID)
            if(!verifyUser) throw new UserNotFound()

            const audit:AuditLogModel ={
                changed,
                user: verifyUser.name as string
            } 

            await this.auditDatabase.createAudit(audit)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
} 