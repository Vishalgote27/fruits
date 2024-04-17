const jwt = require("jsonwebtoken")
exports.protected = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: "please Provide Token"
            })
        }
        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                })
            }

            req.body.userid = decode.userid
            next()
        })



    } catch (error) {

        res.status(400).json({
            message: "Something Went Wrong"
        })
    }
}