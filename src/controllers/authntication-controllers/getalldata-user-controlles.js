const reguster_modle=require("../../model/reguster_model/reguster_model");
const FrendOfUser_model=require("../../model/frrind-section/frind-model");
const FrendRequestToUser=require("../../model/frrind-section/frendrequest-model");
const AllFrindStatus_model=require("../../model/frrind-section/allfrind-model");



const Postes_model=require("../../model/postes-model/post-model")
const CommentOnPostes_model=require("../../model/postes-model/commentOnPostes-model");
const LikeOnPostes_model=require("../../model/postes-model/likeOnPsotes-model");
const shareOnPostes_model=require("../../model/postes-model/shareOnPostes-model");


const notification_model=require("../../model/frrind-section/notification-model")



module.exports=async(req,res)=>{
    const data=await reguster_modle.findAll(
        {
            include:[
                {model:FrendOfUser_model},
                {model:FrendRequestToUser},
                {model:AllFrindStatus_model,attributes:["idfreand"]},
                    {model:Postes_model
                        ,include:[{model:CommentOnPostes_model },
                                  {model:LikeOnPostes_model },
                                  {model:shareOnPostes_model }
                                 ]
                    }
                ,{model:notification_model ,order:[['createdAt', 'DESC']]}
            ]
            ,where:{regusterid:req.params.data},
            attributes: ['action', 'email','fullName','image','regusterid','refreshtoken','gender','phoneNumber','place']
        }
        
    )
    res.json(data)
}