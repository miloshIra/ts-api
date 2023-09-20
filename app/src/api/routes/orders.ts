import {Request, Response, NextFunction } from "express";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');


router.get('/', (req: Request, res: Response, next:NextFunction) => {
    Order.find()
    .select('product quiantity _id')
    .populate('product', 'name')
    .exec()
    .then((docs:any) => {
        res.status(200).json({
            count: docs.length,
            orders: docs.map((doc:any) => {
            return {
                _id: doc._id,
                product: doc.product,
                quantity: doc.quantity,
                request: {
                    type: 'GET',
                    url: 'https://localhost:3000/orders/' + doc._id}
            }
        })
        });
    })
    .catch((error:any) => {
        res.status(500).json({error:error})
    });
});

router.post('/', (req: Request, res: Response, next:NextFunction) => {
    // const product:any = Product.findById(req.body.productId)
    // console.log(product) 
    //     if (!product) {
    //         res.status(404).json({
    //             message: "Product not found"
    //         });
    //     }
        Product.findById(req.body.productId)
        .then((product:any) => {
            if (!product) {
                return res.status(404).json({
                    message: "product not found"
                })
            }
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            product: req.body.productId,
            quantity: req.body.quantity
        });
        return order.save();
        })
        .then((result:any) => {
            console.log(result);
            res.status(201).json({
                message: "Order complete",
                createdOrder: {
                    product: result.product,
                    quantity: result.quantity,
                    _id: result._id 
                },
                request: {
                    type: 'GET',
                    url: 'https://localhost:3000/orders/' + result._id
                }
            });
        })
        .catch((error:any) => {
            console.log(error)
            res.status(500).json({
                error:error
            })
        })
    })   


router.get('/:orderId', (req: Request, res: Response, next:NextFunction) => {
    Order.findById(req.params.orderId)
    .populate('product')
    .exec()
    .then((order:any) => {
        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }
        res.status(200).json({
            order: order,
            request: {
                type : "GET",
                url: 'http://localhost:3000/orders'
            }
        });
    })
    .catch((error:any) => {
        res.status(500).json({
            error: error
        })
    });

});

router.delete('/:orderId', (req: Request, res: Response, next:NextFunction) => {
    Order.deleteOne({ _id: req.params.orderId })
    .exec()
    .then((result:any) => {
        res.status(200).json({
            message: "Order deleted",
            request: {
                type: "POST",
                url: "http://localhost:3000/orders",
                body: { productId: 'ID',
                        quantity: 'Number'}
            }
        });
    });
});

module.exports = router;