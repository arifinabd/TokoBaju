import { Router } from 'express';
import { buat, findById } from '../controllers/orderController.js';
// const { buat, findById } = require('../controllers/orderController')
import { isAuth } from '../utils.js';

const orderRouter = Router();

orderRouter.post(
  '/',
  isAuth,
  buat
);

orderRouter.get(
  '/:id',
  isAuth,
  findById
);

export default orderRouter