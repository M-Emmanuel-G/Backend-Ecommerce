import { ProductsController } from './../controller/productsController';
import express from 'express'

export const productsRouter = express.Router()
const productsController = new ProductsController()

// productsRouter.get('/getAllProducts', productsController.allProducts)
productsRouter.post('/addProducts', productsController.addProducts)
// productsRouter.get('/getProduct/:idProduct', productsController.getProduct)
// productsRouter.delete('/removeProduct/:idProduct', productsController.removeProduct)
// productsRouter.patch('/updateProduct/:idProduct', productsController.updateProduct)