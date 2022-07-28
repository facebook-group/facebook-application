const reguster_model=require("../../model/reguster_model/reguster_model")

module.exports=async(req,res)=>{

    //reamove The Refresh Token From Daatabase
    const DeleteRefreshToken=await reguster_model.update({refreshtoken:"no Value"},{where:{regusterid:req.body.regusterid}})

    //Remove The Refresh Token From Cookei
    res.cookie('refresh_token', '', {maxAge: 0});
    
    //After Succsess Send Massage
    res.send({message: 'success'});
}