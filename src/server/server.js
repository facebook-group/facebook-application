
'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
const http = require('http')
const cors=require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();




//require soket io section 
const {Server} =require("socket.io")

const server = http.createServer(app);
const io=new Server(server,{
  cors:{
      origin: '*',
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,            //access-control-allow-credentials:true

  }
})

app.use(cors({
  origin: '*',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,            //access-control-allow-credentials:true
}))


// support url encoded bodies{parser use to accept the encoded json come from front }
app.use(express.urlencoded({ extended: false }));
// support json encoded bodies
app.use(express.json());








//-----------------------------------------------routes section--------------------------------------------//
const authntication_routes=require("../routes/authntication_routes/authntication_routes")
app.use(authntication_routes)

const Frinds_routes=require("../routes/frends_routes/frends_routs")
app.use(Frinds_routes)

const postes_routes=require("../routes/postes_routes/postes_routes")
app.use(postes_routes)




//----------------------------------------- Soket Io ------------------------------------------------------//
//every user will join to reem same like his id and see all online user
const online_join_soket_routes=require("../routes/soket/socket1-join-online-notification-routes")
online_join_soket_routes(io)

//all function will do on massage section and postes
const massage_post_soket_routes=require("../routes/soket/soket2-massages-post-routes")
massage_post_soket_routes(io)


const report_post_controllers=require("../controllers/postes-controllers/post-report-on-posts")
report_post_controllers(io)

const Role_Update_Request =require("../routes/soket/socket3-Role-Update-Routes")
Role_Update_Request(io)



//----------------------------------------Error Handeler-----------------------------------------------------//
const NotFound404=require("../middelware/404-500/404");
const ErrorHandeler=require("../middelware/404-500/500");

app.use(ErrorHandeler);
app.use(NotFound404);






//----------------------------------------DataBase Connection----------------------------------------------//

//Connection With The Database
const database=require("../database/database");
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  server.listen(PORT, async() => {
        try {
            await database.sync();  
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
  

//---------------------------------------export file section---------------------------------------------//
    module.exports ={
    start: start,
    server:server
};