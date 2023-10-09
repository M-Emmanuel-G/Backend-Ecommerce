import { ProductDTO } from './../models/productsModel';
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
            const {product, productDescription, productPrice, productImg} = req.body
            
            const newProduct:ProductDTO = {
                product, 
                productDescription,
                productPrice,
                productImg
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
            const {idProduct} = req.params

            await this.productsBusiness.getProduct(idProduct)
            res.status(200).send('Produto removido com sucesso.')
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    updateProduct = async(req:Request, res:Response)=>{
        try {

            const {product, productImg, productDescription, productPrice} = req.body
            const {idProduct} = req.params

            const updateProduct:ProductDTO = {
                product,
                productImg,
                productDescription,
                productPrice
            }

            await this.productsBusiness.updateProduct(updateProduct, idProduct)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}