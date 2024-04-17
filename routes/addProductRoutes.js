const { addCartProducts, getAllProducts, removeAddproduct, cartIncrement, cartDecrement } = require("../controllers/addProductController")
const { protected } = require("../middlewares/protected")
const router = require("express").Router()

router
    .get("/", getAllProducts)
    .post("/addproduct", addCartProducts)
    .post("/increment", cartIncrement)
    .post("/decrement", cartDecrement)
    .delete("/remove/:addproductId", removeAddproduct)

module.exports = router
