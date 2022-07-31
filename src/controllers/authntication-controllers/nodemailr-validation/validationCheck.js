const reguster_model=require("../../../model/reguster_model/reguster_model")


module.exports=async(req,res)=>{
    const datauser=await reguster_model.findOne({where:{email:req.body.body.email}})
    if(datauser!==null){
        if(datauser.dataValues.verification==req.body.body.verification){
            const model_updata=await reguster_model.update({verification:'done'},{where:{email:req.body.body.email}})
            res.json({verify:"you verify"})
        }else{
            res.json("wrong verify")
        }

    }
}