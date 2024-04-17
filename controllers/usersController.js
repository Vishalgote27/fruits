const Users = require("../models/Users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const AddProduct = require("../models/AddProduct")


exports.registerdUser = async (req, res) => {
    try {
        const { password, email } = req.body
        const found = await Users.findOne({ email: email })
        if (found) {
            return res.status(400).json({
                message: "Email Already Register"
            })
        }
        const hasspassword = bcrypt.hashSync(password, 10)
        const result = await Users.create({ ...req.body, password: hasspassword, role: "user" })
        res.json({
            message: "User Register Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to register " + error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const result = await Users.findOne({ email: req.body.email })
        if (!result) {
            return res.status(400).json({
                message: "Email not Register"
            })
        }

        const compare = await bcrypt.compare(req.body.password, result.password)
        if (!compare) {
            //password not mach 
            return res.status(400).json({
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({ userid: result._id }, process.env.JWT_KEY)

        res.json({
            message: "User Login Success",
            result,
            token
        })
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong"
        })
    }
}

exports.getAllregisterUsers = async (req, res) => {
    try {

        const result = await Users.find()
        res.json({
            message: "All Users get Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get"
        })
    }
}

exports.getOneregisterUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await Users.findById(userId)
        res.json({
            message: "one register user get success",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get one user"
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await Users.findByIdAndUpdate(userId, req.body, { new: true })
        res.json({
            message: "User update success",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble update"
        })
    }
}

exports.removeUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await Users.findByIdAndDelete(userId)
        res.json({
            message: "User Remove Success",

        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to remove user"
        })
    }
}

exports.destroyUsers = async (req, res) => {
    try {
        const result = await Users.deleteMany()
        res.json({
            message: "User destroy Success",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble destory"
        })
    }
}
