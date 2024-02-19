import { CartController } from './../controller/cartController';
import express from 'express'

export const cartRouter = express.Router()
const cartController = new CartController()

cartRouter.get('/getCart/:idClient', cartController.getCart)
cartRouter.post('/addCart', cartController.addCart)
// cartRouter.delete('/removeItemCart/:idCart', cartController.removeItemCart)
// cartRouter.delete('/clearCart/:idClient', cartController.clearCart)