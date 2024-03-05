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

const addusers = async(userName,email,password,userRole) => {
    const [users] = await pool.query(`
    insert into users (userName,email,password,userRole) values (?,?,?,?)
    `[userName,email,password,userRole] 
    ) 
    return users
}


 


export  {addProduct,getproducts,getproduct,updateproduct,deleteproduct,getusers,addusers}