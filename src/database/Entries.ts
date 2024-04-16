import { EnterNewPassword } from './../customError/AllErrors';
import { db } from "../prisma";
import { BaseDatabase } from "./baseDatabase";
import { EntriesModel } from '../models/EntriesModel';
import { DateGenerator } from '../services/dateGenertor';

export class EntriesDatabase extends BaseDatabase{

    getAllEntries = async ()=>{
        try {

            const result = await EntriesDatabase.connection.productEntries.findMany()
            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getEntry = async (id:string)=>{
        try {
            
            const result = await EntriesDatabase.connection.productEntries.findUnique({
                where:{
                    id:id
                }
            })

            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    makeEntry = async (data:EntriesModel)=>{
        try {
            
            await EntriesDatabase.connection.productEntries.create({
                data:{
                    date: DateGenerator.generateDate(),
                    price:data.price,
                    qtd: data.qtd,
                    note_value: (Number(data.price) * Number(data.qtd)),
                    product_id:data.productID,
                    supplier_id:data.SupplierID
                }
            })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
}