const frindrequest_model=require("../../../model/frrind-section/frendrequest-model")

module.exports=async(req,res)=>{
    const frendrequest=await  frindrequest_model.create(req.body.data)
    res.json("add")
}