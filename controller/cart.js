import {getcarts,addcart,deletecart,updatecart,getcart,insertcart} from "../models/database.js";

export default {
   getitems: async (req,res)=> {
    res.send(await getcarts())
   },
   additems: async (req,res)=>{
    const {  quantity } = req.body;
    const { user} = req.query
    await insertcart(quantity,+req.params.id,user);
    res.send(await addcart())

   },
   deleteitems: async (req,res)=> {
    await deletecart(+req.params.id);
    res.send(await getcarts())
   },
   updateitems: async (req,res)=> {
    let {quantity} = req.body

    const [user] = await getcart(+req.params.id);
    // order_id? order_id : {order_id} = user
    quantity? quantity : {quantity} = user

    await updatecart(quantity,+req.params.id);
    res.send(await getcarts())
   }
} 