import { BaseDatabase } from "./baseDatabase";

export class PurchaseDatabase extends BaseDatabase {
    TABLE_NAME = 'E_Purchases'

    // makePurchase = async (purchase:any)=>{
    //     try {
    //         const { idPurchase, qtdPurchase, datePurchase, idClient, idProduct, deliveryTime,} = purchase

    //         await PurchaseDatabase.connection(this.TABLE_NAME)
    //             .insert(
    //                 {
    //                     purchase_id:idPurchase,
    //                     purchase_qtd:qtdPurchase,
    //                     purchase_date:datePurchase,
    //                     fk_client:idClient,
    //                     fk_product:idProduct,
    //                     purchase_delivery: deliveryTime,
    //                     purchase_status:'Seu pedido esta sendo empacotado para ser despachado.',
    //                 }
    //             )
    //     } catch (error:any) {
    //         throw new Error(error.message);
            
    //     }

    // }

    // getPurchasesByClient = async(idClient:string) =>{
    //     try {
    //         const result = await PurchaseDatabase.connection(this.TABLE_NAME)
    //             .select('product', 'product_img', 'product_price', 'purchase_date', 'purchase_qtd ','purchase_delivery','purchase_status')
    //             .join("E_Products","E_Purchases.fk_product","=","E_Products.id_product")
    //             .where({
    //                 fk_client : idClient
    //             })
    //         return result    
    //     } catch (error:any) {
    //         throw new Error(error.message);
    //     }
    // }
}