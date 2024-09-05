import { config } from 'dotenv';
import bcrypt from 'bcrypt';
// import cookieParser from 'cookie-parser'; // Unused import
import jwt from 'jsonwebtoken';
import { checkuser, getusername } from '../models/database.js';

config();

const authenticate = (req, res, next) => {
  const { cookie } = req.headers; // Destructuring cookie from headers

  if (!cookie) {
    // Check if the cookie header is missing
    return res.sendStatus(401); // Unauthorized if no cookie is present
  }

  // Extract token from cookie; assumes cookie format is 'jwt=<token>'
  const tokenInHeader = cookie
    .split('; ')
    .find((row) => row.startsWith('jwt='))
    ?.split('=')[1];

  if (!tokenInHeader) {
    // Check if the token is missing
    return res.sendStatus(401); // Unauthorized if no token is present
  }

  jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if the token is invalid
    }
    req.user = user; // Attach the user object to the request
    next(); // Proceed to the next middleware or route handler
  });
};

const auth = async (req, res, next) => {
  const { userPass, userName } = req.body;
  const hashedPassword = await checkuser(userName);
  const thisUser = await getusername(userName);

  bcrypt.compare(userPass, hashedPassword, (err, result) => {
    if (err) throw err;
    if (result === true) {
      const token = jwt.sign({ userName: userName }, process.env.SECRET_KEY, { expiresIn: '1h' });
      
      // Set the JWT token in a cookie with proper options
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 3600000, // 1 hour in milliseconds
      });

      res.send({
        token: token,
        msg: 'I have logged in!!! YAY!!!',
        user: thisUser,
      });
    } else {
      res.send({ msg: 'The username or password is incorrect' });
    }
  });
};

export {
  auth,
  authenticate,
};
