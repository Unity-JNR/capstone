import { pool } from "../config/config.js";

const addProduct = async (prodName,description, amount, quantity, img, category) => {
    const [product]  = await pool.query(`
        INSERT INTO Products (prodName, description, amount, quantity, img, category) VALUES (?, ?, ?, ?, ?, ?)
    `, [prodName,description, amount, quantity, img, category])
    return product
}

   const getproducts = async() => {
    const [products] = await pool.query("SELECT * FROM Products");
    return products
   }

   const getproduct = async(id) => {
    const [product] = await pool.query("SELECT * FROM Products WHERE id =?", [id]);
    return product
   }

   const updateproduct = async(prodName, description, amount, quantity, img, category,id) => {
    const [product]  = await pool.query(`
        UPDATE Products SET prodName =?, description =?, amount =?, quantity =?, img =?, category =? WHERE id =?
    `, [prodName,description, amount, quantity, img, category,id])
    return product
   }

   const deleteproduct = async(id) => {
    const [product]  = await pool.query(`
        DELETE FROM Products WHERE id =?
    `, [id])
    return product
   }

//    user

const getusers = async() => {
    const [users] = await pool.query("SELECT * FROM users");
    return users  
}

const addusers = async(userName,userMail,userPass,userRole) => {
    const [result] = await pool.query(`
    insert into users (userName,userMail,userPass,userRole) values (?,?,?,?);
    `,[userName,userMail,userPass,userRole] 
    ) 
    return result 
}

 const getuser = async(id) => {
    const [user] = await pool.query("SELECT * FROM users WHERE userID =?", [id]);
    return user
}

const updateuser = async(userName,userMail,userPass,userRole,userID) => {
    const [user]  = await pool.query(`
        UPDATE users SET userName =?, userMail =?, userPass =?, userRole =? WHERE userID =?
    `, [userName,userMail,userPass,userRole,userID])
    return user 
}

const deleteuser = async(id)=> {
    const [user]  = await pool.query(`
        DELETE FROM users WHERE userID =?
    `, [id])
    return user
}

const checkuser = async(userName)=> {
    const [[{userPass}]]= await pool.query(`
    SELECT userPass From users WHERE userName = ?`,[userName])
    console.log(userPass);
        return userPass
    }

    const getusername = async(userName)=> {
        const [result] = await pool.query(`
        SELECT * FROM users WHERE userName = ?
        `,[userName])
        return result
    }
// cart 

const getcarts = async(userID)=> {
    const [carts] = await pool.query(`
    SELECT  distinct order_id, prodName,Amount,img,category, count(order_id) as quantity, SUM(Amount) AS totalAmount  FROM cart INNER JOIN Products ON cart.id = Products.id WHERE userID = ? group by prodName;
    `,[userID])
    return carts
}

const addcart = async (userID, id) => {
    const [cart] = await pool.query(`
        SELECT *
        FROM cart
        INNER JOIN Products ON cart.id = Products.id
        WHERE userID = ? AND Products.id = ?;
    `, [userID, id]);

    return cart;
};

const insertcart = async (quantity, id, userID) => {
    // Check if the userID exists in the users table
    const [user] = await pool.query('SELECT * FROM users WHERE UserID = ?', [userID]);
    const [product] = await pool.query('select * from Products where id = ?', [id])

    if (user.length === 0) {
        // If the user doesn't exist, you might want to handle this case accordingly
        console.error(`User with ID ${userID} does not exist.`);
        return null; // or throw an error, return a response, etc.
    }

    if (product.length === 0) {
        // If the product doesn't exist, you might want to handle this case accordingly
        console.error(`Product with ID ${id} does not exist.`);
        return null; // or throw an error, return a response, etc.
    }

    // If the user exists, insert the cart record
    await pool.query('INSERT INTO cart (quantity, id, userID) VALUES (?, ?, ?)', [quantity, id, userID]);

    // Optionally, you can return the result of addcart here
    return addcart(quantity, id, userID);
};

 
const deletecart = async(order_id)=> {
    const [cart] = await pool.query(`
    delete from cart where order_id =?
    `,[order_id] 
    ) 
    return cart
}

const updatecart = async(quantity,order_id) => {
    const [cart]  = await pool.query(`
    update cart set quantity =? where order_id =?
    `,[quantity,order_id] 
    )
    return cart
}

const  getcart = async(order_id) => {
  const [cart] = await pool.query("SELECT * FROM cart WHERE order_id =?", [order_id]);
  return cart
}

const deletecarts = async(userID) => {
    const [result] = await pool.query(
        'DELETE FROM cart WHERE UserID = ?',
        [userID]
    );
}



export  {addProduct,getproducts,getproduct,updateproduct,deleteproduct,getusers,addusers,getuser,updateuser,deleteuser,getcarts,addcart,deletecart,updatecart,getcart,insertcart,checkuser,getusername,deletecarts}