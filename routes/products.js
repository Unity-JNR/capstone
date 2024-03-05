import express from 'express';
import controller from '../controller/products.js'

const router = express.Router()

router.route('/')
    .post(controller.addProductToDB)
    .get(controller.getprod) 


    router.route('/:id')
          .get(controller.getsingle)
          .patch(controller.updateprod)
          .delete(controller.deleteprod)

    export default router       