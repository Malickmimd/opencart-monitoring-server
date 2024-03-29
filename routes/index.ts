import { Router } from "express";
import { getOrders, getProducts, getCustomers, getOrdersList } from "../controllers";

const router = Router()

router.get('/orders', getOrders)
router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/orders/list', getOrdersList)

export default router