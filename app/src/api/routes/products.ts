import {Request, Response, NextFunction } from "express";

const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const mongoose = require('mongoose')

router.get('/', (req: Request, res: Response, next:NextFunction) => {
    Product.find()
    .exec()
    .then((docs:Document) => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch((error:any) => {
        console.log(error)
        res.status(500).json({
            error: error
        });
    });
});

// Creates a product and saves it to the database.
router.post('/', (req: Request, res: Response, next:NextFunction) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    

    product
    .save()
    .then((result:Document) => {
        console.log(result);
        res.status(200).json({
            message: "Handling POST requests to /products, aka product creation.",
            created: product
        });
    })
        .catch((error:any) => {
            console.log(error);
            res.status(500).json({error:error})
        })
    });


router.get('/:productId', (req: Request, res: Response, next:NextFunction) => {
    
    const id = req.params.productId;

    Product.findById(id)
    .exec()
    .then((doc:Document) => {
        console.log("From database", doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "id not found"
            });
        }
        
    })
    .catch((error:any) => {
        console.log(error);
        res.status(500).json({error:error})
    })
});


router.patch('/:productId', (req: Request, res: Response, next:NextFunction) => {
    const id = req.params.productId;
    const updateOps:any = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;  // propName is the key, value is the value.. just Type(cough*java*)script things.
    }    
    Product.updateOne({ _id:id }, { $set: updateOps })
    .exec()
    .then((result:Document) =>{
        console.log(result);
        res.status(200).json(result)
    })
    .catch((error:any) => {
        console.log(error)
        res.status(500).json({error:error})
    });

});

router.delete('/:productId', (req: Request, res: Response, next:NextFunction) => {
    const id = req.params.productId
    Product.deleteOne({ _id:id })
    .exec()
    .then((result:any) =>{
        res.status(200).json(result);
    })
    .catch((error:any) => {
        res.status(500).json({
            error:error
        })
    });

});

module.exports = router;