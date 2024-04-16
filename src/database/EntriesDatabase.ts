import { EntriesModel } from "../models/EntriesModel";
import { DateGenerator } from "../services/dateGenertor";
import { BaseDatabase } from "./baseDatabase";

export class EntriesDatabase extends BaseDatabase{
    getAllEntries = async ()=>{
        try {
            const result = await EntriesDatabase.connection.productEntries.findMany({
                include:{
                    product:true,
                    supplier:true
                }
            })
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getEntry = async (id:string)=>{
        try {
            const result = await EntriesDatabase.connection.productEntries.findUnique({
                where:{
                    id
                }
            })
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
    makeEntries = async (data:EntriesModel)=>{
        try {
            await EntriesDatabase.connection.productEntries.create({
                data:{
                    date:DateGenerator.generateDate(),
                    price:data.price,
                    qtd:data.qtd,
                    note_value: data.price * data.qtd,
                    product_id:data.productID,
                    supplier_id: data.supplierID
                
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}