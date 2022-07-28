
let commentOnPost_model=require("../../model/postes-model/commentOnPostes-model");

module.exports=(socket,io)=>{
    socket.on("create_comment",async(data)=>{
        const createComment=await commentOnPost_model.create(data)
        const all_comment=await commentOnPost_model.findAll({where:{commentOnPostId:data.commentOnPostId}})
        io.emit("display_comment",all_comment)
      })
    

}