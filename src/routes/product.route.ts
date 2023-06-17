import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post('/sort', productController.execute);

export default router;