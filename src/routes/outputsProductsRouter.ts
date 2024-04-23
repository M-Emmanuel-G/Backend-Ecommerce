import express from 'express'
import { OutputController } from '../controller/outputController'

export const outputRouter = express.Router()
const outpurController = new OutputController()

outputRouter.get("/getAllOutputs", outpurController.getAllStockOutputs)
outputRouter.get("/getOutput/codOutput/:cod", outpurController.getOutputByCOD)
outputRouter.post("/create/clientID/:clientID/productID/:productID/userID/:userID", outpurController.makeStockOutput)
