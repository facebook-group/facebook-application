const reguster_model=require("../../model/reguster_model/reguster_model")

module.exports=async(req,res)=>{


    const DeleteRefreshToken=await reguster_model.update({refreshtoken:"no Value"},{where:{regusterid:req.body.regusterid}})


    res.cookie('refresh_token', '', {maxAge: 0});
    

    res.send({message: 'success'});
}