
//type of the data use 
const { STRING } = require("sequelize");
const database=require("../../database/database")


const allfrind = database.define('allfrinds', {
    idfreand: {
      type: STRING,
    },
    allfrindid:{
        type:STRING,
        allowNull:false
    }
    
  });

  
  module.exports =allfrind