import { Product, ProductDTO, UpdateProductPercentageModel, UpdateProductStockModel } from "../models/productsModel";
import { db } from "../prisma";
import { DateGenerator } from "../services/dateGenertor";
import { BaseDatabase } from "./baseDatabase";

export class ProductsDatabase extends BaseDatabase{

    allProducts = async ()=>{
        try {
           const result = await db.products.findMany()
           return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addProduct = async(data:Product)=>{
        try {
            

            await ProductsDatabase.connection.products.create({
                data:{
                    entry_time:DateGenerator.generateDate(),
                    price:data.productPrice,
                    product:data.product,
                    qtd_stock:0,
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
            const {product, productPrice} = updateProduct

            const newUpdate = {
                product,
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

    updateProductStock = async(data:UpdateProductStockModel)=>{
        try {
            await ProductsDatabase.connection.products.update({
                where:{
                    id:data.productID
                },
                data:{
                    qtd_stock: data.qtdStock
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProductPercentage = async (data : UpdateProductPercentageModel)=>{
        try {
            await ProductsDatabase.connection.products.update({
                data:{
                    sales_percentage: data.percentage,
                    price:data.price
                },
                where:{
                    id: data.productID
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}