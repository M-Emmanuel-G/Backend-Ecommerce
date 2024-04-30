import { RoleUserNotAdmin, UserNotFound } from "../customError/UserErrors";
import { UsersDatabase } from "../database/UsersDatabase";
import { AuditLogDatabase } from "../database/auditLogDatabase";

export class AuditLogBusiness {

    auditLogDatabase = new AuditLogDatabase()
    usersDatabase = new UsersDatabase()

    getAllAudit = async ()=>{
        try {
            const result = await this.auditLogDatabase.getAllAudit()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}