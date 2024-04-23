import { AuditLogDatabase } from "../database/auditLogDatabase";

export class AuditLogBusiness {

    auditLogBusiness = new AuditLogDatabase()

    getAllAudit = async ()=>{
        try {
            const result = await this.auditLogBusiness.getAllAudit()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}