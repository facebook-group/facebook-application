const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


module.exports  = database.define('massagess', {
    text: {
      type: TEXT,//String Varchar(3360)
    },
    chatId:{
        type:TEXT,
    },
    frindid: {
        type: TEXT,//String Varchar(3360)
      },
    fullName:{
          type:TEXT,
      },
    image:{
        type:TEXT,
    },
    myfrindid:{
        type:TEXT,
    },
    showmassage:{
      type:STRING,
      defaultValue:false
    }



  
    
  }, {
    // Other model options go here
  });
