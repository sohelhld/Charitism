
const jwt = require('jsonwebtoken');
require("dotenv").config()

const Auth = async(req,res,next)=>{

    try {
        const {token} = req.cookies
        if(!token) return res.status(401).send({message:"user is not authinticated "});
        
        const isTokenCorrect = await jwt.verify(token,process.env.jwtSecret)
        if(!isTokenCorrect) return res.status(401).send({message:"token is not correct"});

        next()

    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports={Auth}