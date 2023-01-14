const jwt = require("jsonwebtoken")

function verifyToken(req, res, next){
    const headerAuth = req.headers['Authorization']
    if(headerAuth==null){
        res.status(401).send("Token requerido")
    }

    let token = headerAuth.split(' ')[1]

}