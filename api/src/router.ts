import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories, createCategory, listProducts, createProduct, listProductsByCategory, listOrders, createOrder, changeOrderStatus, cancelOrder } from './app/useCases'

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb){
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, cb){
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
});

router.get('/categories', listCategories)

router.post('/categories', createCategory)

router.get('/products', listProducts)

router.post('/products', upload.single('image'), createProduct)

router.get('/categories/:categoryId/products', listProductsByCategory)

router.get('/orders', listOrders)

router.post('/orders', createOrder)

router.patch('/orders/:orderId', changeOrderStatus)

router.delete('/orders/:orderId', cancelOrder)
