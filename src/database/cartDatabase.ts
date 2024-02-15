import { BaseDatabase } from "./baseDatabase";

export class CartDatabase extends BaseDatabase{

    TABLE_NAME = 'E_Cart'

    // getCart = async (idClient:string)=>{
    //     try {
            
    //         const result = await CartDatabase.connection(this.TABLE_NAME)
            
    //         .select()
    //         .join('E_Products','E_Cart.fk_product','=','E_Products.id_product')
    //         .where(
    //             {
    //                 fk_client : idClient
    //             }
    //             )
    //             return result
            
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // addCart = async (idClient:string, idCart:string, qtdPurchase:number, idProduct:string)=>{
    //     try {
    //         await CartDatabase.connection(this.TABLE_NAME)
    //             .insert(
    //                 {
    //                     cart_id : idCart,
    //                     qtd_purchase : qtdPurchase,
    //                     fk_product : idProduct,
    //                     fk_client : idClient 
    //                 }
    //             )
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // removeItemCart = async(idCart:string)=>{
    //     try {
    //         await CartDatabase.connection(this.TABLE_NAME)
    //             .delete()
    //             .where(
    //                 {
    //                     cart_id : idCart
    //                 }
    //             )
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // getItemCart = async(idCart:string)=>{
    //     try {
            
    //         const result = await CartDatabase.connection(this.TABLE_NAME)
    //         .select()
    //         .where(
    //             {
    //                 cart_id : idCart
    //             }
    //         )
    //         return result
                
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }

    // clearCart = async(idClient:string)=>{
    //     try {
    //         await CartDatabase.connection(this.TABLE_NAME)
    //             .delete()
    //             .where({
    //                 fk_client : idClient
    //             })
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }
}