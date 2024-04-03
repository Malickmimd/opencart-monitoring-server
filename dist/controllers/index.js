"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductCategory = exports.getOrdersList = exports.getCustomers = exports.getProducts = exports.getOrders = void 0;
const dbConfig_1 = require("../config/dbConfig");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select count(*) as Nombre_de_commandes from oc_order', (err, rows) => {
            return res.status(200).json(rows[0].Nombre_de_commandes);
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getOrders = getOrders;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select count(*) as Nombre_de_produits from oc_product', (err, rows) => {
            return res.status(200).json(rows[0].Nombre_de_produits);
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getProducts = getProducts;
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select count(*) as Nombre_de_clients from oc_customer', (err, rows) => {
            return res.status(200).json(rows[0].Nombre_de_clients);
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getCustomers = getCustomers;
const getOrdersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select order_id as id, firstname, lastname, oc_order_status.name as status from oc_order join oc_order_status on oc_order.order_status_id = oc_order_status.order_status_id', (err, rows) => {
            return res.status(200).json(rows);
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getOrdersList = getOrdersList;
const getProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('SELECT cd.name AS category_name, COUNT(p.product_id) AS product_count FROM oc_product p JOIN oc_product_to_category ptc ON p.product_id = ptc.product_id JOIN oc_category_description cd ON ptc.category_id = cd.category_id WHERE p.quantity > 0 GROUP BY cd.name', (err, rows) => {
            return res.status(200).json(rows);
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getProductCategory = getProductCategory;
