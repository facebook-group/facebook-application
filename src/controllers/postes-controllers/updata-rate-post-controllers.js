const post_model=require("../../model/postes-model/post-model")

module.exports=async(req,res)=>{
    const myrate=await post_model.findOne({where:{postId:req.body.body.postId}}).then(async(data)=>{
    let rateUse=(Math.floor(((data.dataValues.rate)+(req.body.body.value))/2))
    const updataRate=await post_model.update({rate:rateUse},{where:{postId:req.body.body.postId}})
    })
}