import { Request, Response } from 'express';
import { connection } from '../config/dbConfig';

export const getOrders = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_commandes from oc_order', (err: any, rows: { Nombre_de_commandes : number } []) => {
            return res.status(200).json(rows[0].Nombre_de_commandes);
          })
    }
    catch(err) {
        throw err
    }
}
export const getProducts = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_produits from oc_product', (err: any, rows: { Nombre_de_produits : number } []) => {
            return res.status(200).json(rows[0].Nombre_de_produits);
          })
    }
    catch(err) {
        throw err
    }
}
export const getCustomers = async (req: Request, res: Response) => {
    try {
        connection.query('select count(*) as Nombre_de_clients from oc_customer', (err: any, rows: { Nombre_de_clients : number } []) => {
            return res.status(200).json(rows[0].Nombre_de_clients);
          })
    }
    catch(err) {
        throw err
    }
}
export const getOrdersList = async (req: Request, res: Response) => {
    try {
        connection.query(' select order_id as id, firstname, lastname, oc_order_status.name as status from oc_order join oc_order_status on oc_order.order_status_id = oc_order_status.order_status_id', 
        (err: any, rows: { id: number, firstname : string, lastname: string, status: number } []) => {
            return res.status(200).json(rows);
          })
    }
    catch(err) {
        throw err
    }
}