import express from 'express';
import { PurchaseController } from '../controller/purchaseController';

export const purchaseRouter = express.Router()
const purchaseController = new PurchaseController();

// purchaseRouter.post('/makePurchase/:idClient/:idProduct/:qtdPurchase', purchaseController.makePurchase)
// purchaseRouter.get('/getPurchases/:idClient', purchaseController.getPurchaseByClient)