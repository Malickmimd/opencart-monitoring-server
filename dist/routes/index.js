"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/orders', controllers_1.getOrders);
router.get('/products', controllers_1.getProducts);
router.get('/customers', controllers_1.getCustomers);
router.get('/orders/list', controllers_1.getOrdersList);
router.get('/products/category', controllers_1.getProductCategory);
exports.default = router;
