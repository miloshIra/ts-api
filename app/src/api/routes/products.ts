import {Request, Response, NextFunction } from "express";

const express = require('express');
const router = express.Router();



router.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    });

});


router.post('/', (req: Request, res: Response, next:NextFunction) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: "Handling POST requests to /products, aka product creation.",
        created: product
    });

});


router.get('/:productId', (req: Request, res: Response, next:NextFunction) => {
    
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: "You discovered the special ID",
            id: id
        });
    } else {
        res.status(200).json({
            message:"Not a special ID"
            })
    }
});


router.patch('/:productId', (req: Request, res: Response, next:NextFunction) => {
        res.status(200).json({
            message: "Updated product"
        });
});

router.delete('/:productId', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).json({
        message: "Deleted product"
    });
});

module.exports = router;