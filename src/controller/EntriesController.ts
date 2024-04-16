import { Request, Response } from "express"
import { EntriesBusiness } from "../business/EntriesBusiness"
import { EntriesModel } from "../models/EntriesModel"

export class EntriesController{

    entriesBusiness = new EntriesBusiness()

    getAllEntries = async (req:Request, res:Response)=>{
        try {

          const result = await this.entriesBusiness.getAllEntries()
          res.status(200).send(result)

         } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getEntry = async (req:Request, res:Response)=>{
        try {

        const {entryID} = req.params

        const result = await this.entriesBusiness.getEntry(entryID)
        res.status(200).send(result)

         } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    makeEntries = async (req:Request, res:Response)=>{
        try {

            const {qtd, price} = req.body
            const {supplierID, productID} = req.params

            const data:EntriesModel = {
                price,
                qtd,
                supplierID,
                productID
            }

            await this.entriesBusiness.makeEntries(data)

            res.status(200).send({message:"Nota de saida realizada com sucesso!"})

         } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}