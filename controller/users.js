import {getusers,addusers} from "../models/database.js";

export default {
   getallusers: async (req,res)=> {
    res.send(await getusers()) 
   },
adduser : async (req,res)=> {
    const { userName,email,password,userRole} = req.body;

        await addusers(userName,email,password,userRole);

        res.send(await getusers())

}
} 