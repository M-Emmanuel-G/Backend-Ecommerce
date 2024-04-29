import { ProductDTO, UpdateProductPercentageModel } from './../models/productsModel';
import { Request, Response } from "express";
import { ProductsBusiness } from "../business/productsBusiness";

export class ProductsController{

    productsBusiness = new ProductsBusiness();

    allProducts = async (req:Request, res:Response)=>{
        try {
            const result = await this.productsBusiness.allProducts()
            
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
    
    addProducts = async  (req:Request, res:Response)=>{
        try {
            const {product, productPrice,} = req.body
            const {userID} = req.params
            
            const newProduct:ProductDTO = {
                product, 
                productPrice,
                userID
            }

            await this.productsBusiness.addProduct(newProduct)

            res.status(200).send('Produto registrado para venda com sucesso.')

        } catch (error:any) {
           res.status(400).send(error.message);
        }
    }

    getProduct = async (req:Request, res:Response)=>{
        try {
           const {idProduct} = req.params

           const result = await this.productsBusiness.getProduct(idProduct)
           res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    removeProduct = async (req:Request, res:Response)=>{
        try {
            const {idProduct, userID} = req.params

            await this.productsBusiness.removeProduct(idProduct, userID)
            res.status(200).send('Produto removido com sucesso.')
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    updateProduct = async(req:Request, res:Response)=>{
        try {

            const {product, productPrice} = req.body
            const {idProduct, userID} = req.params

            const updateProduct:ProductDTO = {
                product,
                productPrice,
                userID
            }
            
            await this.productsBusiness.updateProduct(updateProduct, idProduct)
            res.status(200).send({message:"Produto Atualizado com sucesso!"})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateProductPercentage = async(req:Request, res:Response)=>{
        try {
          
            const {percentage, price} = req.body
            const {productID, userID} = req.params

            const data:UpdateProductPercentageModel = {
                percentage,
                productID,
                userID,
                price
            }
            console.log(data);
            

            await this.productsBusiness.updateProductPercentage(data)

            res.status(200).send({message:"Porcentagem do produto foi alterada com sucesso!"})
            
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}