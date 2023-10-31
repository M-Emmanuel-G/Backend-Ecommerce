import { ValueNotFound } from './../customError/CartErrors';
import { QuantityInvalid } from '../customError/CartErrors';
import { ProductNotFound } from '../customError/ProductsErrors';
import { IdGenerator } from '../services/idGenerator';
import { CartDatabase } from './../database/cartDatabase';
import { ProductsDatabase } from './../database/productsDatabase';
export class CartBusiness {

    productsDatabase = new ProductsDatabase()
    cartDatabase = new CartDatabase();

    addCart = async (idClient:string, qtdPurchase:number, idProduct:string)=>{
        try {
            if( !qtdPurchase ) throw new ValueNotFound()
            if( qtdPurchase <= 0 ) throw new QuantityInvalid()
            

            const verifyProduct = await this.productsDatabase.getProduct(idProduct)
            if( verifyProduct.length < 0) throw new ProductNotFound()

            const idCart = IdGenerator.generate()

            await this.cartDatabase.addCart(idClient, idCart, qtdPurchase, idProduct)
        
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getCart = async (idClient:string)=>{
        try {
           
            const result = await this.cartDatabase.getCart(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeItemCart = async(idCart:string)=>{
        try {
            
            const verifyCart = await this.cartDatabase.getItemCart(idCart);
            if(verifyCart.length === 0) throw new ProductNotFound()
            
            
            await this.cartDatabase.removeItemCart(idCart);
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    clearCart = async(idClient:string)=>{
        try {
            await this.cartDatabase.clearCart(idClient);
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}