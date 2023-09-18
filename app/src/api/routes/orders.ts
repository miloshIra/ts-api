import {Request, Response, NextFunction } from "express";

const express = require('express');
const router = express.Router();


router.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).json({
        message: "Handling GET requests to /orders"
    });

});

router.post('/', (req: Request, res: Response, next:NextFunction) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "Order was created",
        order: order
    });

});

router.get('/:orderId', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).json({
        message: "Order details",
        id: req.params.orderId
    });

});

router.delete('/:orderId', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).json({
        message: "Order deleted",
        id: req.params.orderId
    });

});

module.exports = router;