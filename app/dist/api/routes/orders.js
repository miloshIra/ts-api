"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /orders"
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Order was created"
    });
});
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Order details",
        id: req.params.orderId
    });
});
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Order deleted",
        id: req.params.orderId
    });
});
module.exports = router;
