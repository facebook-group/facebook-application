const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


module.exports  = database.define('massagess', {
    text: {
      type: TEXT,
    },
    chatId:{
        type:TEXT,
    },
    frindid: {
        type: TEXT,
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



  
    
  });