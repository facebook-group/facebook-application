
const postes_model=require("../../model/postes-model/post-model")
const comment_model=require("../../model/postes-model/commentOnPostes-model")
const like_model=require("../../model/postes-model/likeOnPsotes-model")
module.exports=async(req,res)=>{
    const get_allpostes=await postes_model.findAll({
        include:[{
            model:comment_model
        },{
            model:like_model
        }],
        order: [
            ['createdAt', 'DESC'],
        ]
    })
    res.json(get_allpostes)
}