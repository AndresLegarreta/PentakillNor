const jwt = require('jsonwebtoken');
const {config} = require('../config/config');

async function firmarjwt (req,res){
    
    try{
    const newToken = await jwt.sign(
        {email: "andeslede@gmail.com"},
        config.auth.secretKey,
        {algorithm: 'HS256'}
        );

        res.status(200).json({
            message: "OK",
            jwt: newToken
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "Error al crear token jwt"
        });
    }
}

async function verifyjwt (req,res,next){
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    res.status(200);
    let authToken;

    if (authHeader && authHeader.length){
        const tokenParts = authHeader.split('');
        if(tokenParts.length === 2){
            authToken = tokenParts[1];
        }
    }

    try{
        await jwt.verify(authToken, config.auth.secretKey);
        next();
    }catch(err){
        console.log('Error de verificacion');
    }
}

module.exports = {
    firmarjwt,
    verifyjwt

}