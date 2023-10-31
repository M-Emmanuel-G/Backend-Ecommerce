import { Product, ProductDTO } from "../models/productsModel";
import { BaseDatabase } from "./baseDatabase";

export class ProductsDatabase extends BaseDatabase{
TABLE_NAME = 'E_Products'

    allProducts = async ()=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addProduct = async(newProduct:Product)=>{
        try {
            const {idProduct, productPrice, productImg, productDescription, product, productCategory } = newProduct

            await ProductsDatabase.connection(this.TABLE_NAME)
                .insert(
                    {
                        id_product: idProduct,
                        product: product,
                        product_price: productPrice,
                        product_img: productImg,
                        product_description: productDescription,
                        product_categories: productCategory
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProduct = async (idProduct:string)=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
            .select()
            .where({
                id_product:idProduct
            })

            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async (idProduct:string)=>{
        try {
            await ProductsDatabase.connection(this.TABLE_NAME)
            .delete()
            .where({
                id_product:idProduct
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
        try {
            const {product, productImg, productDescription, productPrice, productCategory} = updateProduct

            const newUpdate = {
                product,
                productImg,
                productDescription,
                productPrice,
                productCategory
            }

            await ProductsDatabase.connection(this.TABLE_NAME)
                .update(newUpdate)
                .where(
                    {
                        id_product : idProduct,
                    }
                )

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}