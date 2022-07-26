const frindrequest_model=require("../../../model/frrind-section/frendrequest-model")

module.exports=async(req,res)=>{
    const deleteFrendRequest=await  frindrequest_model.destroy({
        where:req.body
    })
    res.json("add")
}