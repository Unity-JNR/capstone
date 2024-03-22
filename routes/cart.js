import express from 'express';
import controller from '../controller/cart.js'


const router = express.Router()

router.route('/')
//     .post(controller.additems)


router.route('/:id')
//       .get(controller.getsingle)
         .get(controller.getitems) 
         .patch(controller.updateitems)
         .delete(controller.deleteitems)
         .post(controller.additems)

router.route('/delete/:id')
         .delete(controller.deleteall)

    export default router  