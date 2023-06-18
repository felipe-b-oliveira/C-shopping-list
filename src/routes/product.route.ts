import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post('/sort', productController.createSortedList);
router.post('/post', productController.execute);

export default router;