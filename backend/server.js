import express from 'express';
import productRoutes from './routes/routes.js'
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import Product from './model/model.js';
dotenv.config();

const app = express();
const PORT = process.env.port;
app.use(express.json());

app.use('/api/products',productRoutes)



app.listen(PORT, () => {
    connectDb();
    console.log('server is up')
})