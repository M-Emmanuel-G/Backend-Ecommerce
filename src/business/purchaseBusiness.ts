import { Product } from './../models/productsModel';
import { ClientsDatabase } from '../database/client.Database';
import { PurchaseDatabase } from './../database/purchaseDatabase';
import { ProductsDatabase } from '../database/productsDatabase';
import { IdGenerator } from '../services/idGenerator';
import { DateGenerator } from '../services/dateGenertor';
import { Purchase } from '../models/purchaseModel';
import { DateDelivery } from '../services/dateDelivery';
import { QuantityFormat, QuantityNotFound } from '../customError/purchaseErrors';
import { ClientNotFound } from '../customError/AllErrors';
import { ProductNotFound } from '../customError/ProductsErrors';

export class PurchaseBusiness{

    purchaseDatabase = new PurchaseDatabase();
    clientDatabase = new ClientsDatabase();
    productDatabase = new ProductsDatabase()

    makePurchase = async(purchase:Purchase)=>{
        try {
            const { qtdPurchase, idClient, idProduct} = purchase

            if(!qtdPurchase) throw new QuantityNotFound()
            if(qtdPurchase <= 0 || qtdPurchase >= 6) throw new QuantityFormat()

            const verifyClient = await this.clientDatabase.getClientById(idClient)
            if(verifyClient.length  !== 1) throw new ClientNotFound()
            
            const verifyProduct = await this.productDatabase.getProduct(idProduct)
            if(verifyProduct.length !== 1) throw new ProductNotFound()

            const id = IdGenerator.generate()
            const date = DateGenerator.generateDate()

            const newPurchase = {
                idPurchase: id,
                qtdPurchase: qtdPurchase,
                datePurchase : date,
                idClient,
                idProduct,
                deliveryTime: DateDelivery.generateDate(),
            }

            await this.purchaseDatabase.makePurchase(newPurchase)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getPurchasesByClient = async (idClient:string)=>{
        try {
            const verifyClient = await this.clientDatabase.getClientById(idClient)
            if(verifyClient.length === 0) throw new ClientNotFound()

            const result = await this.purchaseDatabase.getPurchasesByClient(idClient)
            return result
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}