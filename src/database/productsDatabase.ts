import { Product, ProductDTO } from "../models/productsModel";
import { BaseDatabase } from "./baseDatabase";

export class ProductsDatabase extends BaseDatabase{


    allProducts = async ()=>{
        try {
           const result = await ProductsDatabase.connection.products.findMany()
           return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addProduct = async(newProduct:Product)=>{
        try {
            const { productPrice, productImg, productDescription, product} = newProduct

            await ProductsDatabase.connection.products.create({
                data:{
                    description: productDescription,
                    price:productPrice,
                    product:product,
                    urlImg:productImg
                }
            })
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProduct = async (idProduct:string)=>{
        try {
            const result = await ProductsDatabase.connection.products.findUnique({
                where:{id:idProduct}
            })

            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async (idProduct:string)=>{
        try {
            await ProductsDatabase.connection.products.delete({
                where:{
                    id:idProduct
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
        try {
            const {product, productImg, productDescription, productPrice} = updateProduct

            const newUpdate = {
                product,
                urlImg: productImg,
                description: productDescription,
                price: productPrice
            }

            await ProductsDatabase.connection.products.update({
                where: {id: idProduct},
                data : newUpdate
            })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}