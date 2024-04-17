const { getAllregisterUsers, registerdUser, getOneregisterUser, updateUser, destroyUsers, removeUser, loginUser } = require("../controllers/usersController")
const { protected } = require("../middlewares/protected")
const router = require("express").Router()

router
    .get("/", protected, getAllregisterUsers)
    .get("one/:userId", getOneregisterUser)
    .post("/register", registerdUser)
    .post("/login", loginUser)
    .put("/update/:userId", updateUser)
    .delete("/destroy", destroyUsers)
    .delete("/remove/:userId", removeUser)

module.exports = router