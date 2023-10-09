import { cartRouter } from './routes/cartRouter';
import { productsRouter } from './routes/productsRouter';
import express from 'express';
import cors from 'cors'
import { clientsRouter } from './routes/clientsRouter';
import { purchaseRouter } from './routes/purchaseRouter';
import { DateDelivery } from './services/dateDelivery';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/Products', productsRouter)
app.use('/Cart', cartRouter)
app.use('/Clients', clientsRouter)
app.use('/purchases', purchaseRouter)

app.listen(3003, ()=>{
    console.log('SERVER IS RUNNING IN PORT 3003');
})
