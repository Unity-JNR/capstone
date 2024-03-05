import express from 'express';
import { config } from 'dotenv';
import  productRoute from './routes/products.js';
import userRoute from './routes/users.js';
import cartRoute from './routes/cart.js';

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/products', productRoute); 
app.use('/users', userRoute);
app.use('/cart', cartRoute);



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
