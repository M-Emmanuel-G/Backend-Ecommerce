import { ClientsController } from './../controller/clientsController';
import express from 'express'

export const clientsRouter = express.Router()

const clientsController = new ClientsController()

clientsRouter.post('/create', clientsController.createClient)
clientsRouter.get('/getAllClients', clientsController.getAllClient)
clientsRouter.get('/getClient/clientID/:id', clientsController.getClient)
clientsRouter.patch('/update/clientID/:id', clientsController.updateClient)
clientsRouter.delete('/delete/clientID/:id', clientsController.deleteClient)
clientsRouter.patch('/available/clientID/:id', clientsController.updateClientAvailable)