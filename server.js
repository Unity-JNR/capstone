import express from 'express';
import { config } from 'dotenv';
import  productRoute from './routes/products.js';
import userRoute from './routes/users.js';
import cartRoute from './routes/cart.js';
import signupRoute from './routes/sign_up.js';
import loginRoute from './routes/login.js';
import {auth,authenticate} from './middleware/authentication.js';
import { errorHandling } from './middleware/errorHandling.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'https://vintage-vibes-30d41.firebaseapp.com',
  credentials: true
}))
app.use(express.json());
app.use(express.static('static'))

app.use(cookieParser());

app.use('/products', productRoute); 
app.use('/users', userRoute);
app.use('/cart',authenticate, cartRoute);
app.use('/signup', signupRoute);
app.use('/login',auth, loginRoute);



app.delete('/logout', (req, res) => {
  // Clear the 'jwt' cookie
  res.clearCookie('jwt');
  
  res.send({
    msg: 'You have been logged out'
  });
});

app.use(errorHandling)

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
