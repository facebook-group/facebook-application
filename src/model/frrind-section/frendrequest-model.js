const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


const frendrequest = database.define('frendrequests', {
     PersonSendFrendRequest: {
      type: STRING,
    },
    fullName:{
        type:STRING,
    },
    image: {
      type: TEXT,
    },
    status: {
      type: STRING,
    },
    PersonAcceptFrendRequest: {
      type: STRING,
      allowNull:false
    }
  });

  
  module.exports =frendrequest