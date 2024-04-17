const mongoose = require("mongoose")

const addProductSchema = mongoose.Schema({
    category: {
        type: String,
        require: [true, "category is required"]
    },
    img: {
        type: String,
        require: [true, "img is required"]
    },
    title: {
        type: String,
        require: [true, "title is required"]
    },
    price: {
        type: String,
        require: [true, "Price is required"]
    },
    qty: {
        type: Number,
        require: [true, "qty is required"]
    },
    count: {
        type: Number,
        require: [true, "Count is required"]
    },

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        require: [true, "Please Provide User Id"]

    }
})
module.exports = mongoose.model("addproduct", addProductSchema)