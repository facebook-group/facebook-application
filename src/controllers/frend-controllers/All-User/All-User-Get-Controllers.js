const reguster_modle=require("../../../model/reguster_model/reguster_model")
module.exports=async(req,res)=>{
    const data=await reguster_modle.findAll(
        {attributes: ['regusterid', 'fullName','email','image','isOnline']},
    )
    res.json(data)
}