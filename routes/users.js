import express from 'express';
import controller from '../controller/users.js'

const router = express.Router()

router.route('/')
     .post(controller.adduser)
     .get(controller.getallusers) 


    // router.route('/:id')
    //       .get(controller.getsingle)
    //       .patch(controller.updateprod)
    //       .delete(controller.deleteprod)

    export default router  