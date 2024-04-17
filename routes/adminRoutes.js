const { addproduct, getproduct, removeproduct, updateproduct, destroyproduct, getOneProduct } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/", getproduct)
    .get("/one/:productId", getOneProduct)
    .post("/upload", addproduct)
    .put("/edit/:productId", updateproduct)
    .delete("/destroy", destroyproduct)
    .delete("/remove/:productId", removeproduct)

module.exports = router
