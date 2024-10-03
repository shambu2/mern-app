import express from 'express'
import Product from '../model/model.js';
import { deleteControl, getControl, postControl, putControl } from '../controller/controller.js';
const router = express.Router();

router.get('/', getControl)



router.post('/', postControl)
router.put('/:id',putControl)
router.delete('/:id', deleteControl)
export default router;