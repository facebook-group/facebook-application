const notification_model=require("../../model/frrind-section/notification-model")

module.exports=async(req,res)=>{
    const getnotification=await  notification_model.findAll({
        where:{PersonAcceptFrendRequest:req.params.data},
        order:[['createdAt', 'DESC']]
    
    })
    res.json(getnotification)
}