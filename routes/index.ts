import { Router } from "express";
import { getOrders, getProducts, getCustomers, getOrdersDetails } from "../controllers";

const router = Router()

router.get('/orders', getOrders)
router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/orders/details', getOrdersDetails)

export default router