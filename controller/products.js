import { addProduct ,getproducts,getproduct, updateproduct,deleteproduct} from "../models/database.js";

export default {
    addProductToDB : async (req, res) => {

        const { prodName,description, amount, quantity, img, category} = req.body; 

        await addProduct(prodName,description, amount, quantity, img, category);

        res.send(await getproducts())
    },
    getprod: async (req, res) => {
        res.send(await getproducts())
    },
    getsingle : async (req, res) => {
        res.send(await getproduct(+req.params.id))
    },
    updateprod: async (req, res) => {
        let {prodName, description, amount, quantity, img, category} = req.body

        const [product] = await getproduct(+req.params.id);

        prodName ? prodName : {prodName} = product
        
        description? description : {description} = product

        amount ? amount : {amount} = product

        quantity ? quantity : {quantity} = product

        img ? img : {img} = product

        category ? category : {category} = product


        await updateproduct(prodName, description, amount, quantity, img, category, +req.params.id)

        res.send(await getproducts());

    },
    deleteprod: async (req, res) => {
        await deleteproduct(+req.params.id);

        res.send(await getproducts());
    }
} 