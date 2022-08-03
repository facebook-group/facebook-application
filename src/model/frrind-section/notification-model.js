const { STRING } = require("sequelize");
const database=require("../../database/database")


const notification_model = database.define('notifications', {
    PersonSendFrendRequest: {
      type:STRING,
    },
    TypeNotification: {
        type:STRING,
      },  
    PersonAcceptFrendRequest:{
        type:STRING,
        allowNull:false
    },
    fullName:{
      type:STRING,
    },
    image:{
      type:STRING,

    }
    
  });

  
  module.exports =notification_model