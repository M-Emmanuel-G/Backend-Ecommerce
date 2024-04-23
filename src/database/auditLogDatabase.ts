import { DateGenerator } from "../services/dateGenertor";
import { BaseDatabase } from "./baseDatabase";

export class AuditLog extends BaseDatabase{
    createAudit = async (data:AuditLogModel)=>{
        try {
        
            await AuditLog.connection.auditLog.create({
                data:{
                    date: DateGenerator.generateDate(),
                    newValue: data.newValue,
                    oldValue: data.oldValue,
                    changed: data.changed,
                    user: data.user
                }
            })
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}