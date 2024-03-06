import express from 'express';
import controller from '../controller/cart.js'


const router = express.Router()

router.route('/')
//     .post(controller.additems)
    .get(controller.getitems) 


    router.route('/:id')
    //       .get(controller.getsingle)
          .patch(controller.updateitems)
          .delete(controller.deleteitems)
          .post(controller.additems)

    export default router  