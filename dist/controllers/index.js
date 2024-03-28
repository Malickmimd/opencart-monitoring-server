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
exports.getOrdersDetails = exports.getCustomers = exports.getProducts = exports.getOrders = void 0;
const dbConfig_1 = require("../config/dbConfig");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select count(*) as Nombre_de_commandes from oc_order', (err, rows) => {
            return res.status(200).json({ Nombre_de_commandes: rows[0].Nombre_de_commandes });
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
            return res.status(200).json({ Nombre_de_produits: rows[0].Nombre_de_produits });
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
            return res.status(200).json({ Nombre_de_clients: rows[0].Nombre_de_clients });
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getCustomers = getCustomers;
const getOrdersDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbConfig_1.connection.query('select order_id, firstname, lastname, order_status_id from oc_order', (err, rows) => {
            return res.status(200).json({ OrdersDetails: rows });
        });
    }
    catch (err) {
        throw err;
    }
});
exports.getOrdersDetails = getOrdersDetails;
