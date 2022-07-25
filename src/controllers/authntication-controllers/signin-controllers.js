const reguster_model=require("../../model/reguster_model/reguster_model")


module.exports=async (req,res,next)=>{
    //Create The Access Token And Refresh Token
    const acces_Token=require("../../token/access-token");
    const refresh_token=require("../../token/refresh_token");

    //After Check The Basic Auth Now Create Cooke 
    try {
        //user have from basic auth have the all information of reguster
        user=req.basicAuth

        //Invoket The AccessToken And Refresh Token
        let accessToken= acces_Token(user)
        let refreshToken=refresh_token(user)

        //add refresh token to the database
        let addRefreshToken=await reguster_model.update({refreshtoken:refreshToken},{where:{email:user.email}})

        // Refresh Toekn Will Send In Cooke More Save Cant Any One Access Just User
        res.cookie('refresh_token', refreshToken, {
            // maxAge: 365 * 24 * 60 * 60 * 100, // session only cookie
            httpOnly: true // cannot be modified using XSS or JS
        })

        //The Access Token Will Send Ass Response
        res.status(200).json({accessToken:accessToken,refreshToken:refreshToken});
        }
     catch (error) {
       res.status(403).send('There Is Problem In SignIn');
       }
      
}
