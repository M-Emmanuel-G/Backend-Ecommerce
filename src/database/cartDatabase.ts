import { BaseDatabase } from "./baseDatabase";

export class CartDatabase extends BaseDatabase{


    getCart = async (idClient:string)=>{
        try {
            
          const result = CartDatabase.connection.cart.findUnique({
            where:{id:idClient}
          })
          return result  

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addCart = async (idClient:string, qtdPurchase:number, idProduct:string)=>{
        try {
            await CartDatabase.connection.cart.create({
                data:{
                    quantity:qtdPurchase,
                    productId:idProduct,
                    userID:idClient
                }
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

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