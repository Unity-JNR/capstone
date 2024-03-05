import {getusers,addusers,getuser,updateproduct, updateuser} from "../models/database.js";

export default {
   getallusers: async (req,res)=> {
    res.send(await getusers()) 
   },
adduser : async (req,res)=> {
    const { userName,userMail,userPass,userRole} = req.body;

        await addusers(userName,userMail,userPass,userRole);

        res.send(await getusers())

},
getoneuser : async (req,res)=> {
    res.send(await getuser(+req.params.id))

},
edit : async (req,res)=> {  
    let {userName,userMail,userPass,userRole} = req.body

    const [user] = await getuser(+req.params.id);

    userName ? userName : {userName} = user
    userMail? userMail : {userMail} = user
    userPass? userPass : {userPass} = user
    userRole? userRole : {userRole} = user
    
   


    await updateuser(userName,userMail,userPass,userRole,+req.params.id)

    res.send(await getusers());

}
} 