import { BodyNotInserted } from './../customError/AllErrors';
import { ProductsDatabase } from "../database/productsDatabase";
import { Product, ProductDTO } from "../models/productsModel";
import { IdGenerator } from "../services/idGenerator";

export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()

    allProducts = async ()=>{
        try {
            const result = await this.productsDatabase.allProducts()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addProduct = async (newProduct:ProductDTO)=>{
        try {
            const {product, productImg, productDescription, productPrice, productCategory} = newProduct

            if(!product  || !productDescription || !productImg || !productPrice || !productCategory) throw new Error("Todos os campos precisam ser inseridos.");

            if(productPrice <= 0) throw new Error('O valor nao pode ser abaixo de zero.')

            const id = IdGenerator.generate()

            const NewProduct:Product = {
                idProduct: id,
                productImg,
                productDescription,
                productPrice,
                product,
                productCategory
            }

            await this.productsDatabase.addProduct(NewProduct)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProduct = async (idProduct:string)=>{
        try {
           const verifyProduct = await this.productsDatabase.getProduct(idProduct);
           if(verifyProduct.length === 0 ) throw new Error('Producto nao encontrado.');

           const result = await this.productsDatabase.getProduct(idProduct)
           return result
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async (idProduct:string)=>{
        try {
            
           const verifyProduct = await this.productsDatabase.getProduct(idProduct);
           if(verifyProduct.length === 0 ) throw new BodyNotInserted()

           await this.productsDatabase.getProduct(idProduct)
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
        try {
            const {product, productImg, productDescription, productPrice, productCategory} = updateProduct

            const verifyProduct = await this.productsDatabase.getProduct(idProduct);
            if(verifyProduct.length === 0 ) throw new BodyNotInserted()

            if(!product || !productImg || !productDescription || !productPrice) throw new BodyNotInserted()
            if(isNaN(productPrice)) throw new Error('Formato invalido.. sera aceito somente numeros.')

            const newUpdate:ProductDTO = {
                product,
                productImg,
                productDescription,
                productPrice,
                productCategory
            }

            await this.productsDatabase.updateProduct(newUpdate, idProduct)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
   
}