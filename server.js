import express from 'express';
import { config } from 'dotenv';
import  productRoute from './routes/products.js';
import userRoute from './routes/users.js';
import cartRoute from './routes/cart.js';
import signupRoute from './routes/sign_up.js';
import loginRoute from './routes/login.js';
import {auth,authenticate} from './middleware/authentication.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))
app.use(express.json());
app.use(express.static('public'))

app.use(cookieParser());
// app.use(authenticate)
app.use('/products', productRoute); 
app.use('/users', userRoute);
app.use('/cart', cartRoute);
app.use('/signup', signupRoute);
app.use('/login',auth, loginRoute);



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
