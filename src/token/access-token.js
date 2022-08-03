const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports= createAccessToken =(user)=> jwt.sign({

   
    fullName:user.fullName,
    image:user.image,
    regusterid:user.regusterid,
    role:user.role
},


    process.env.ACCESS_TOKEN_SECRET ,

    {expiresIn:"1d"}
    );