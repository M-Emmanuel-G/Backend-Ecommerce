import express from 'express'
import { SuppliersController } from '../controller/suppliersController'

export const supplierRouter = express.Router()
const supplierController = new SuppliersController()

supplierRouter.get("/getAllSuppliers", supplierController.getAllSupplier)
supplierRouter.get("/getSupplier/supplierID/:id", supplierController.getSupplier)
supplierRouter.post("/create", supplierController.addSupplier)
supplierRouter.patch("/update/supplierID/:id", supplierController.updateSupplier)
supplierRouter.delete("/delete/supplierID/:id", supplierController.deleteSupplier)
