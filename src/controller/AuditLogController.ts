import { Request, Response } from "express";
import { AuditLogBusiness } from "../business/AuditLogBusiness";

export class AuditLogController{

    auditLogBusiness = new AuditLogBusiness()

    getAllAudit = async (req:Request, res:Response)=>{
        try {

            const {userID} = req.params

            const result = await this.auditLogBusiness.getAllAudit(userID)
            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
 
}