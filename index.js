const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const mongoose = require("mongoose")
const path = require("path")
const { connectMongo } = require("./config/db")
connectMongo()
const cors = require("cors")
const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(cors())
app.use(express.json())

app.use("/users", require("./routes/usersRoutes"))
app.use("/addcart", require("./routes/addProductRoutes"))
app.use("/admin", require("./routes/adminRoutes"))
app.use("/buy", require("./routes/buyProductRoutes"))


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})


mongoose.connection.once("open", () => {
    console.log("MONGO DB CONNECT");
    app.listen(process.env.PORT, err => {
        if (err) {
            console.log("UNABLE TO START SERVER", err);
        } else {
            console.log("SERVER RUNNING http://localhost:5000");
        }
    })
})

mongoose.connection.on("error", err => {
    console.log("UNABLE TO MONGO CONNECT", err);
})

