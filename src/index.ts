import { productsRouter } from './routes/productsRouter';
import express from 'express';
import cors from 'cors'
import { clientsRouter } from './routes/clientsRouter';
import { usersRouter } from './routes/userRouter';
import { supplierRouter } from './routes/SupplierRouter';
import { outputRouter } from './routes/outputsProductsRouter';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/InventoryStock/Products', productsRouter)
app.use('/InventoryStock/Clients', clientsRouter)
app.use("/InventoryStock/Users", usersRouter)
app.use("/InventoryStock/Suppliers", supplierRouter)
app.use("/InventoryStock/Outputs", outputRouter)

app.listen(3003, ()=>{
    console.log('SERVER IS RUNNING IN PORT 3003');
})
