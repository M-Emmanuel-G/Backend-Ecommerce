import { RoleUserNotAdmin, UserNotFound } from "../customError/UserErrors";
import { UsersDatabase } from "../database/UsersDatabase";
import { AuditLogDatabase } from "../database/auditLogDatabase";

export class AuditLogBusiness {

    auditLogDatabase = new AuditLogDatabase()
    usersDatabase = new UsersDatabase()

    getAllAudit = async (userID:string)=>{
        try {

            const user = await this.usersDatabase.getUserID(userID)
            if(!user) throw new UserNotFound()
            if(user.type !== "Admin") throw new RoleUserNotAdmin();
            
            const result = await this.auditLogDatabase.getAllAudit()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}