
const post_model=require("../../model/postes-model/post-model")
module.exports=async(req,res)=>{
    const postmodel=await post_model.destroy({where:{postId:req.body.body.postId}})   
}