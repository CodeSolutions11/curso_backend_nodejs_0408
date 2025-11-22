import express from 'express';
import productsRouter from './routes/products.js';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});