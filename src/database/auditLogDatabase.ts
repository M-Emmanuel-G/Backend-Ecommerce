import { AuditLogModel } from "../models/auditModel";
import { DateGenerator } from "../services/dateGenertor";
import { BaseDatabase } from "./baseDatabase";

export class AuditLogDatabase extends BaseDatabase{
    createAudit = async (data:AuditLogModel)=>{
        try {
        
            await AuditLogDatabase.connection.auditLog.create({
                data:{
                    date: DateGenerator.dateNow(),
                    changed: data.changed,
                    user: data.user
                }
            })
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllAudit = async ()=>{
        try {
            const result = await AuditLogDatabase.connection.auditLog.findMany(
                )
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}