const AddProduct = require("../models/AddProduct")
const Admin = require("../models/Admin")
const Users = require("../models/Users")

exports.addproduct = async (req, res) => {
    try {
        const result = await Admin.create(req.body)
        res.json({
            message: "upload Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "unable to Upload" + error
        })
    }
}

exports.getproduct = async (req, res) => {
    try {
        const result = await Admin.find()
        res.json({
            message: "get all category Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "unable to get" + error
        })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const result = await Admin.findById(productId)
        res.json({
            message: "one  Product get success",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get one Product"
        })
    }
}

exports.updateproduct = async (req, res) => {
    try {
        const { productId } = req.params
        const result = await Admin.findByIdAndUpdate(productId, req.body, { new: true })
        res.json({
            message: "product Edit Successfully Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "unable to update" + error
        })
    }
}

exports.removeproduct = async (req, res) => {
    try {
        const { productId } = req.params
        const result = await Admin.findByIdAndDelete(productId)
        res.json({
            message: "remove one product Successfully",

        })
    } catch (error) {
        res.status(400).json({
            message: "unable to remove" + error
        })
    }
}

exports.destroyproduct = async (req, res) => {
    try {
        const result = await Admin.deleteMany()
        res.json({
            message: "remove All product Successfully",
            result

        })
    } catch (error) {
        res.status(400).json({
            message: "unable to remove All" + error
        })
    }
}

exports.adminGetAllUsers = async (req, res) => {
    try {
        const token = req.headers.authorization
        jwt.verify(token, process.env.JWT_KEY)
        const result = await Users.find()
        res.json({
            message: " All Users Featch  Successfully",
            result

        })
    } catch (error) {
        res.status(400).json({
            message: "unable to users" + error
        })
    }
}


// exports.orderProduct = async (req, res) => {
//     try {
//         console.log(req.body);
//         const result = await AddProduct.create()
//         res.json({
//             message: "orders Product success",
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: "Unble to get one Product"
//         })
//     }
// }


// exports.getAllOrders = async (req, res) => {
//     try {
//         const result = await Admin.find()
//         res.json({
//             message: "get all Orders Successfully",
//             result
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: "unable to get" + error
//         })
//     }
// }