const { getBuyProduct, BuyProducts, removeBuy } = require("../controllers/buyProductController")


const router = require("express").Router()

router
    .get("/", getBuyProduct)
    .post("/buyproduct", BuyProducts)
    .delete("/remove/:buyId", removeBuy)

module.exports = router