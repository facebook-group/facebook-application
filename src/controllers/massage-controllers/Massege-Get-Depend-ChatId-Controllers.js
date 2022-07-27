const massage_model=require("../../model/massage-section/massage-model")
module.exports=async(req,res)=>{
    const massage=await massage_model.findAll({
        where:{
            chatId:req.params.chatId
        }
    })
    res.json(massage)
}