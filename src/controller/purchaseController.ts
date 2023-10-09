import { Request, Response } from 'express';
import { PurchaseBusiness } from './../business/purchaseBusiness';
export class PurchaseController{
    purchaseBusiness = new PurchaseBusiness();

    makePurchase = async (req:Request, res:Response)=>{
        try {
            const {qtdPurchase} = req.body
            const {idClient, idProduct} = req.params

            const newPurchase = {
                qtdPurchase,
                idClient,
                idProduct
            }

            await this.purchaseBusiness.makePurchase(newPurchase)

            res.status(201).send({message:"Compra realizada com sucesso..."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getPurchaseByClient = async (req:Request, res:Response)=>{
        try {
            const {idClient} = req.params

            const result = await this.purchaseBusiness.getPurchasesByClient(idClient)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}