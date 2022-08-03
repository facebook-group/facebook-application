module.exports=(io)=>{
    //------------------------------------------Posts Soket Io ------------------------------------------------//
    
    io.on("connection",(socket)=>{
  
      //create the post section 
      const Create_Postes=require("../../controllers-soket/Soket5-Postes/Create1-Post");
      Create_Postes(socket,io);
    
      //create Like section 
      const Create_Like_On_Post=require("../../controllers-soket/Soket5-Postes/Create3-Like");
      Create_Like_On_Post(socket,io);
    
      //create Comment Section 
      const Create_Comment_On_Post=require("../../controllers-soket/Soket5-Postes/Create2-Comment")
      Create_Comment_On_Post(socket,io)
    
      //create Share Post
      const Crete_Share_On_Post=require("../../controllers-soket/Soket5-Postes/Create4-Share")
      Crete_Share_On_Post(socket,io)
  
  
      //------------------------------vedio call section ------------------------------------------------//
      const Create_VedioCall=require("../../controllers-soket/Soket6-vedio-call/vedio-call")
      Create_VedioCall(socket,io)
    
    
    })
  
  }