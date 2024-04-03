import { Router } from "express";
import { getOrders, getProducts, getCustomers, getOrdersList, getProductCategory } from "../controllers";

const router = Router()

router.get('/orders', getOrders)
router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/orders/list', getOrdersList)
router.get('/products/category', getProductCategory)

export default router