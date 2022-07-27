const like_model=require("../../model/postes-model/likeOnPsotes-model")
module.exports=async(req,res)=>{
    const get_all_like_post=await like_model.findAll({
        where:{post_liked_id:req.params.data}
    })
    res.json(get_all_like_post)
}