import { BodyNotInserted } from './../customError/AllErrors';
import { ProductsDatabase } from "../database/productsDatabase";
import { Product, ProductDTO, UpdateProductPercentageModel } from "../models/productsModel";
import { IdGenerator } from "../services/idGenerator";
import { NumberFormat, ProductNotFound, ValueInvalid } from '../customError/ProductsErrors';
import { AuditLog } from '../services/audit';

export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()
    auditLog = new AuditLog()

    addProduct =  async(newProduct:ProductDTO)=>{
        try {

            const {product, productPrice, userID} = newProduct

            if(!product || !productPrice) throw new BodyNotInserted()

            if(productPrice <= 0) throw new ValueInvalid()

            const NewProduct:Product = {
                productPrice,
                product,
            }

            const changed = `O produto ${product} foi adicionado!`
            await this.auditLog.auditLog(changed, userID)


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

    removeProduct = async (idProduct:string, userID:string)=>{
        try {
            
           const verifyProduct = await this.productsDatabase.getProduct(idProduct);
           if(!verifyProduct ) throw new ProductNotFound

           const changed = `Produto ${verifyProduct.product} foi removido!`
           
           await this.auditLog.auditLog(changed, userID)
           await this.productsDatabase.removeProduct(idProduct)
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProduct = async(updateProduct:ProductDTO, idProduct:string)=>{
        try {
            const {product, productPrice, userID} = updateProduct
            
            const verifyProduct = await this.productsDatabase.getProduct(idProduct);
            if(!verifyProduct) throw new ProductNotFound()
            
            if(!product || !productPrice) throw new BodyNotInserted()
            if(isNaN(productPrice)) throw new NumberFormat()
            
            const newUpdate:ProductDTO = {
                product,
                productPrice,
                userID
            }

            const changed = `Produto ${verifyProduct.product} foi atualizado!`

            await this.auditLog.auditLog(changed, userID)

            await this.productsDatabase.updateProduct(newUpdate, idProduct)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProductPercentage = async(data:UpdateProductPercentageModel)=>{
        try {
            if(!data.percentage || !data.price) throw new BodyNotInserted();
            
            const product = await this.productsDatabase.getProduct(data.productID)
            if(!product) throw new ProductNotFound();

            const changed = `Porcentagem de venda do produto ${product.product} foi atualizada!`

            await this.auditLog.auditLog(changed, data.userID)
            await this.productsDatabase.updateProductPercentage(data)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
   
}