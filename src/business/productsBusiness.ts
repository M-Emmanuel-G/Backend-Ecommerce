import { BodyNotInserted } from './../customError/AllErrors';
import { ProductsDatabase } from "../database/productsDatabase";
import { Product, ProductDTO } from "../models/productsModel";
import { IdGenerator } from "../services/idGenerator";
import { NumberFormat, ProductNotFound, ValueInvalid } from '../customError/ProductsErrors';
import { DateGenerator } from '../services/dateGenertor';

export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()

    addProduct =  async(newProduct:ProductDTO)=>{
        try {

            const {product, productPrice} = newProduct

            if(!product || !productPrice) throw new BodyNotInserted()

            if(productPrice <= 0) throw new ValueInvalid()

            const id = IdGenerator.generate()


            const NewProduct:Product = {
                productPrice,
                product,
            }

            await this.productsDatabase.addProduct(NewProduct)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    allProducts = async ()=>{
        try {
            const result = await this.productsDatabase.allProducts()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProduct = async (idProduct:string)=>{
        try {
           const verifyProduct = await this.productsDatabase.getProduct(idProduct)
           if(!verifyProduct ) throw new ProductNotFound()

           const result = await this.productsDatabase.getProduct(idProduct)
           return result
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async (idProduct:string)=>{
        try {
            
           const verifyProduct = await this.productsDatabase.getProduct(idProduct);
           if(!verifyProduct ) throw new ProductNotFound

           await this.productsDatabase.removeProduct(idProduct)
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
        try {
            const {product, productPrice} = updateProduct
            
            const verifyProduct = await this.productsDatabase.getProduct(idProduct);
            if(!verifyProduct) throw new ProductNotFound()
            
            if(!product || !productPrice) throw new BodyNotInserted()
            if(isNaN(productPrice)) throw new NumberFormat()
            
            const newUpdate:ProductDTO = {
                product,
                productPrice,
            }

            await this.productsDatabase.updateProduct(newUpdate, idProduct)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
   
}