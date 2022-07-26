const frend_model=require("../../../model/frrind-section/frind-model")

module.exports=async(req,res)=>{
    const frend1=await  frend_model.create(req.body.data)
    res.json("add")
}