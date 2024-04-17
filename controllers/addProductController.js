const AddProduct = require("../models/AddProduct")
const jwt = require("jsonwebtoken")

exports.addCartProducts = async (req, res) => {
    try {
        const token = req.headers.authorization
        const x = jwt.verify(token, process.env.JWT_KEY)
        const result = await AddProduct.create({ ...req.body, userId: x.userid })
        res.json({
            message: "Added Successfully"
        })

    } catch (error) {
        res.status(400).json({
            message: "unable to Added" + error
        })
    }
}


exports.getAllProducts = async (req, res) => {
    try {

        const token = req.headers.authorization
        const x = jwt.verify(token, process.env.JWT_KEY)
        const result = await AddProduct.find({ userId: x.userid })
        res.json({
            message: "All Products get Successfully",
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Unble to get"
        })
    }
}

exports.removeAddproduct = async (req, res) => {
    try {
        const { addproductId } = req.params
        const result = await AddProduct.findByIdAndDelete(addproductId)
        res.json({
            message: "remove one product Successfully",

        })
    } catch (error) {
        res.status(400).json({
            message: "unable to remove" + error
        })
    }
}

exports.cartIncrement = async (req, res) => {
    try {
        const { uData } = req.body
        const log = await AddProduct.findOne({ _id: uData })
        const result = await AddProduct.findByIdAndUpdate(uData, { qty: log.qty + 1, count: log.count - 1 }, { new: true })
        res.json({
            message: "User update success",
            result
        })

    } catch (error) {
        res.status(400).json({
            message: "unable to remove" + error
        })
    }
}

exports.cartDecrement = async (req, res) => {
    try {
        const { uData } = req.body
        const log = await AddProduct.findOne({ _id: uData })
        const result = await AddProduct.findByIdAndUpdate(uData, { qty: log.qty - 1, count: log.count + 1 }, { new: true })
        res.json({
            message: "User update success",
            result
        })

    } catch (error) {
        res.status(400).json({
            message: "unable to remove" + error
        })
    }
}


