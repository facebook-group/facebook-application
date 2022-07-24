const { STRING } = require("sequelize");
const database=require("../../database/database")


const allfrind = database.define('allfrinds', {
    idfreand: {
      type: STRING,//String Varchar(3360)
    },
    allfrindid:{
        type:STRING,
        allowNull:false
    }
    
  });

  
  module.exports =allfrind