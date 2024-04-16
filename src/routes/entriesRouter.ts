import { EntriesController } from '../controller/EntriesController';
import express from 'express'

export const entriesRouter = express.Router()

const entriesController = new EntriesController()

entriesRouter.get("/getAllEntries", entriesController.getAllEntries)
entriesRouter.get("/getEntry/entryID/:id", entriesController.getEntry)
entriesRouter.post("/makeEntry/productID/:productID/supplierID/:supplierID", entriesController.makeEntries)