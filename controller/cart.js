import {getcarts,addcart,deletecart,updatecart,getcart} from "../models/database.js";

export default {
   getitems: async (req,res)=> {
    res.send(await getcarts())
   },
   additems: async (req,res)=>{
    const {  order_id,quantity } = req.body;
    await addcart(order_id,quantity);
    res.send(await getcarts())

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