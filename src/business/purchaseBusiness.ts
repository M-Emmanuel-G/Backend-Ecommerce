import { Product } from './../models/productsModel';
import { ClientsDatabase } from '../database/client.Database';
import { PurchaseDatabase } from './../database/purchaseDatabase';
import { ProductsDatabase } from '../database/productsDatabase';
import { IdGenerator } from '../services/idGenerator';
import { DateGenerator } from '../services/dateGenertor';
import { Purchase } from '../models/purchaseModel';
import { DateDelivery } from '../services/dateDelivery';
export class PurchaseBusiness{

    purchaseDatabase = new PurchaseDatabase();
    clientDatabase = new ClientsDatabase();
    productDatabase = new ProductsDatabase()

    makePurchase = async(purchase:Purchase)=>{
        try {
            const { qtdPurchase, idClient, idProduct} = purchase

            if(!qtdPurchase) throw new Error('Quantidade nao informada.')
            if(qtdPurchase <= 0 || qtdPurchase >= 6) throw new Error('Quantidade deve ser enter 0 e 5.')

            const verifyClient = await this.clientDatabase.getClientById(idClient)
            if(verifyClient.length  !== 1) throw new Error("Cliente nao encontrado.");
            
            const verifyProduct = await this.productDatabase.getProduct(idProduct)
            if(verifyProduct.length !== 1) throw new Error("Produto nao encontrado.")

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
            if(verifyClient.length === 0) throw new Error( 'Cliente nao existe')

            const result = await this.purchaseDatabase.getPurchasesByClient(idClient)
            return result
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}