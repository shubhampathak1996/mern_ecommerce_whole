const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        offer: {
            type: Number
        },
        productPictures: [
            { img: { type: String } }
        ],
        reviews: [{
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            review: String
        }],
        category: {
            type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId, ref: 'USer', required: true

        },
        updatedAt: Date,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
