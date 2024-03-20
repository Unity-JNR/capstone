import express from 'express';
import controller from '../controller/cart.js'


const router = express.Router()

router.route('/')
 .get(controller.clearcarts)
//     .post(controller.additems)


router.route('/:id')
//       .get(controller.getsingle)
          .get(controller.getitems) 
          .patch(controller.updateitems)
          .delete(controller.deleteitems)
          .post(controller.additems)

    export default router  