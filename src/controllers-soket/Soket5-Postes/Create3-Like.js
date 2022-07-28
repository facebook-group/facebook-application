let likeOnPost_model=require("../../model/postes-model/likeOnPsotes-model");


module.exports=(socket)=>{
    socket.on("createLikePost",async(data)=>{
        const createLikePost=await likeOnPost_model.create(data)
      })
    socket.on("deletelike",async(data)=>{
      const deleteLike=await likeOnPost_model.destroy({
        where:{person_do_like_id:data.person_do_like_id}
      })
    })
    
}