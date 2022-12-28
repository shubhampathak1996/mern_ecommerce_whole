const Product = require("../models/product")
const express = require("express");
const slugify = require('slugify');
const router = express.Router();

const shortid = require("shortid")

exports.createProduct = (req, res) => {
    // res.status(200).json(({
    //     file: req.files, body: req.body
    // }))
    const { name, price, description, quantity, category, createdBy } = req.body
    let = [];

    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }


    const product = new Product({

        name: name,
        slug: slugify(name),

        price: price,
        quantity: quantity,
        description: description,
        productPictures: productPictures,
        category: category,
        createdBy: req.user._id


    })
    console.log(product)
    product.save(((error, product) => {
        if (error) return res.status(400).json({ error })
        if (product) return res.status(201).json({ product })
    }))
}