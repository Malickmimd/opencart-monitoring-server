import { Request, Response } from 'express';
import { connection } from '../config/dbConfig';

export const getOrders = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_commandes from oc_order', (err: any, rows: { Nombre_de_commandes : number } []) => {
            return res.status(200).json({ Nombre_de_commandes :  rows[0].Nombre_de_commandes});
          })
    }
    catch(err) {
        throw err
    }
}
export const getProducts = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_produits from oc_product', (err: any, rows: { Nombre_de_produits : number } []) => {
            return res.status(200).json({ Nombre_de_produits :  rows[0].Nombre_de_produits});
          })
    }
    catch(err) {
        throw err
    }
}
export const getCustomers = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_clients from oc_customer', (err: any, rows: { Nombre_de_clients : number } []) => {
            return res.status(200).json({ Nombre_de_clients :  rows[0].Nombre_de_clients});
          })
    }
    catch(err) {
        throw err
    }
}
export const getOrdersDetails = async (req: Request, res: Response) => {
    try {
        connection.query('select order_id, firstname, lastname, order_status_id from oc_order', 
        (err: any, rows: { id: number, firstname : string, lastname: string, status: number } []) => {
            return res.status(200).json({ OrdersDetails :  rows});
          })
    }
    catch(err) {
        throw err
    }
}