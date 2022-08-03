
const poste_model=require("../../model/postes-model/post-model")

module.exports=(io)=>{
    io.on("connection",(soket)=>{

        soket.on("report-on-post",async(data)=>{
            const UpdateReport=await poste_model.update({report:++data.report},{where:{postId:data.postId}})
            soket.to(data.personDoPostId).emit("send-the-report-to-person-do-post",data)

            if(data.report==3){
                const UpdateReport=await poste_model.destroy({where:{postId:data.postId}})
            }

        })
    })
}

