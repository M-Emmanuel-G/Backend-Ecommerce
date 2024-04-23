import { ProductsController } from './../controller/productsController';
import express from 'express'

export const productsRouter = express.Router()
const productsController = new ProductsController()

productsRouter.get('/getAllProducts', productsController.allProducts)
productsRouter.post('/addProducts/userID/:userID', productsController.addProducts)
productsRouter.get('/getProduct/:idProduct', productsController.getProduct)
productsRouter.delete('/removeProduct/:idProduct/userID/:userID', productsController.removeProduct)
productsRouter.patch('/update/:idProduct/userID/:userID', productsController.updateProduct)