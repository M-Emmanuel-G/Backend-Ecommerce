import { Request, Response } from "express";
import { CartBusiness } from "../business/cartBusiness";

export class CartController{

    cartBusiness = new CartBusiness();

    addCart = async (req:Request, res:Response)=>{
        try {
            const qtdPurchase = req.body.qtdPurchase as number
            const idProduct = req.body.idProduct as string
            const idClient = req.body.idClient as string

            await this.cartBusiness.addCart(idClient, qtdPurchase, idProduct)
            res.status(200).send({message:'Produto adicionado ao carrinho.'})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getCart = async (req:Request, res:Response)=>{
        try {

            const idClient = req.params.idClient as string
           
           const result =  await this.cartBusiness.getCart(idClient)
           res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    removeItemCart = async(req:Request, res:Response)=>{
        try {
            const {idCart} = req.params
            
            await this.cartBusiness.removeItemCart(idCart)
            
            
            res.status(200).send({message:'Produto removido do carrinho.'})

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    clearCart = async(req:Request, res:Response)=>{
        try {
            const {idClient} = req.params

            await this.cartBusiness.clearCart(idClient)
            res.status(200).send({message:'Carrinho limpo'})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}