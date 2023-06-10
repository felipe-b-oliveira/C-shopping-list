import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRoute from './routes/product.route';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/products', productsRoute);
app.get('/', (req, res) => res.status(404));

export { app };