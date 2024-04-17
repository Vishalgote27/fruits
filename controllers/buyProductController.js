const BuyProduct = require("../models/BuyProduct")

exports.BuyProducts = async (req, res) => {
    try {
        const result = await BuyProduct.create(req.body)
        res.json({
            message: "buy product successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to buy product"
        })
    }
}

exports.getBuyProduct = async (req, res) => {
    try {
        const result = await BuyProduct.find()
        res.json({
            message: "get buy all Products",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get buy product"
        })
    }
}

exports.removeBuy = async (req, res) => {
    try {
        const { buyId } = req.params
        const result = await BuyProduct.findByIdAndDelete(buyId)
        res.json({
            message: "User Remove Success",

        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to remove buy product"
        })
    }
}