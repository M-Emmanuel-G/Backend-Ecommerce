import { Request, Response } from "express";
import { OutputBusiness } from "../business/outputBusiness";
import { OutPutProductsModelDTO } from "../models/OutPutProductsModel";

export class OutputController{
    outputBusiness = new OutputBusiness()

    makeStockOutput = async(req:Request, res:Response)=>{
        try {

            const {qtd} = req.body
            const {clientID, productID} = req.params

            const data:OutPutProductsModelDTO = {
                clientID,
                productID,
                qtd
            }

            await this.outputBusiness.makeStockOutput(data)

            res.status(200).send({message:"Saida realizada com sucesso!"})
           
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getOutputByCOD = async(req:Request, res:Response)=>{
        try {
          
            const {cod} = req.params

            const result = await this.outputBusiness.getOutputByCOD(Number(cod))
            
            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAllStockOutputs = async (req:Request, res:Response)=>{
        try {
        
            const result = await this.outputBusiness.getAllStockOutputs()
            res.status(200).send(result)


        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}