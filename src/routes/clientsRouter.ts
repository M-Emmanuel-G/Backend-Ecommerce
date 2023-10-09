import { ClientsController } from './../controller/clientsController';
import express from 'express'

export const clientsRouter = express.Router()

const clientsController = new ClientsController()

clientsRouter.post('/signup', clientsController.signUpClient)
clientsRouter.post('/login', clientsController.loginClient)
clientsRouter.get('/getClient/:cpf', clientsController.getClientByCPF)
clientsRouter.post('/changePass', clientsController.changePassword)
clientsRouter.post('/updatePass/:idClient', clientsController.updatePassword)