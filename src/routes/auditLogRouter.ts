import { AuditLogController } from '../controller/AuditLogController';
import { ClientsController } from '../controller/clientsController';
import express from 'express'

export const auditRouter = express.Router()

const auditController = new AuditLogController()

auditRouter.get('/getall', auditController.getAllAudit)