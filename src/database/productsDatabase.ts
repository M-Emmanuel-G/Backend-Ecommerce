import { Product, ProductDTO } from "../models/productsModel";
import { BaseDatabase } from "./baseDatabase";

export class ProductsDatabase extends BaseDatabase{


    // allProducts = async ()=>{
    //     try {
           
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

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

    // getProduct = async (idProduct:string)=>{
    //     try {
    //         const result = await ProductsDatabase.connection.products.findUnique

    //         return result
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // removeProduct = async (idProduct:string)=>{
    //     try {
    //         await ProductsDatabase.connection(this.TABLE_NAME)
    //         .delete()
    //         .where({
    //             id_product:idProduct
    //         })
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }
    
    // updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
    //     try {
    //         const {product, productImg, productDescription, productPrice, productCategory} = updateProduct

    //         const newUpdate = {
    //             product,
    //             productImg,
    //             productDescription,
    //             productPrice,
    //             productCategory
    //         }

    //         await ProductsDatabase.connection(this.TABLE_NAME)
    //             .update(newUpdate)
    //             .where(
    //                 {
    //                     id_product : idProduct,
    //                 }
    //             )

    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

}