import { OutPutProductsModel } from "../models/OutPutProductsModel";
import { BaseDatabase } from "./baseDatabase";

export class OutPutDatabase extends BaseDatabase{
    makeStockOutput = async(data:OutPutProductsModel)=>{
        try {
            await OutPutDatabase.connection.outputProducts.create({
                data:{
                    date_output: data.date,
                    qtd_purchase: data.qtd,
                    clientsID:data.clientID,
                    productID:data.productID
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getOutputByCOD = async(cod:number)=>{
        try {
            const result = await OutPutDatabase.connection.outputProducts.findUnique({
                where:{
                    cod_output:cod
                }
            })

            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getAllStockOutputs = async ()=>{
        try {
            const result = await OutPutDatabase.connection.outputProducts.findMany({
                include:{
                    clients:true,
                    products:true
                }
            })
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}