import { pool } from "../config/config.js";

const addProduct = async (prodName,description, amount, quantity, img, category) => {
    const [product]  = await pool.query(`
        INSERT INTO Products (prodName, description, amount, quantity, img, category) VALUES (?, ?, ?, ?, ?, ?)
    `, [prodName,description, amount, quantity, img, category])
    return product
}

// console.log(addProduct('ford','red',20,1,"www.ford.com","classics")); 

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

// console.log(addusers("caela","caela@gmail.com","gagag","user"));



export  {addProduct,getproducts,getproduct,updateproduct,deleteproduct,getusers,addusers,getuser,updateuser}