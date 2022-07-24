const {STRING,TEXT,VIRTUAL,ENUM}=require("sequelize")

const database=require("../../database/database")

const reguster = database.define('regusters', {
    // Model attributes are defined here
    regusterid:{
      type:STRING,
      primaryKey:true,
      allowNull:false
    },
    fullName: {
      type:STRING,
      allowNull:false
    },
    email: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      allowNull: false
    },
    password: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      allowNull: false
    },
    phoneNumber: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      defaultValue:""
    },
    gender: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      defaultValue:""
    },
    place: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type:STRING,
      defaultValue:""
    },
    role:{//ENUM MEAN YOU NEED TO SELECT ON OF THISE JUST YOU CANT INSERT ANOTHER TYP
      type:ENUM('admin','writer','editor','user'),
      defaultValue:"user",
    },
    image: {
      type: TEXT,//String Varchar(3360)
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
      // allowNull defaults to true
    },
    isOnline:{
      type:STRING,
      defaultValue:false
    },
    accessToken: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: VIRTUAL,
    },
    refreshtoken: {
      type:TEXT,
    },
    action:{ 
      type: VIRTUAL,//the data will get all the type
      get(){
        const acl={
          user:['read'],
          writer:['read','create'],
          editor:['read','create','update'],
          admin:['read','create','update']
        }
        //becuse this.role come as string we use [] to invoke not .
        return acl[this.role];
      }
    }
  }, {
    timestamps: false
  });

//-------------------------------------ALL RELATION REGUSTER---------------------------------------------//
const frind_request_model=require("../../model/frrind-section/frendrequest-model");
const frind_model=require("../../model/frrind-section/frind-model");
const allfrind_model=require("../../model/frrind-section/allfrind-model")

  reguster.hasMany(frind_request_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"PersonAcceptFrendRequest",
    sourceKey:"regusterid"
  })
  frind_request_model.belongsTo(reguster,{
    constraints: false,
    timestamps: false,
    foreignKey:"PersonAcceptFrendRequest",
    targetKey:"regusterid"
  })


  reguster.hasMany(frind_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"frindid",
    sourceKey:"regusterid"
  })
  frind_model.belongsTo(reguster,{
    constraints: false,
    timestamps: false,
    foreignKey:"frindid",
    targetKey:"regusterid"
  })

  reguster.hasMany(frind_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"frindid",
    sourceKey:"regusterid"
  })
  frind_model.belongsTo(reguster,{
    constraints: false,
    timestamps: false,
    foreignKey:"frindid",
    targetKey:"regusterid"
  })

  reguster.hasMany(allfrind_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"allfrindid",
    sourceKey:"regusterid"
  })
  allfrind_model.belongsTo(reguster,{
    constraints: false,
    timestamps: false,
    foreignKey:"allfrindid",
    targetKey:"regusterid"
  })





//-----------------------------------------postes relation section-------------------------------------//
const Post_model=require("../../model/postes-model/post-model");
reguster.hasMany(Post_model,{
  constraints: false,
  timestamps: false,
  foreignKey:"personDoPostId",
  sourceKey:"regusterid"
})
Post_model.belongsTo(reguster,{
  constraints: false,
  timestamps: false,
  foreignKey:"personDoPostId",
  targetKey:"regusterid"
})




//-----------------------------------------notification model-------------------------------------------//
const notofication_model=require("../../model/frrind-section/notification-model")
reguster.hasMany(notofication_model,{
  constraints: false,
  timestamps: false,
  foreignKey:"PersonAcceptFrendRequest",
  sourceKey:"regusterid"
})
notofication_model.belongsTo(reguster,{
  constraints: false,
  timestamps: false,
  foreignKey:"PersonAcceptFrendRequest",
  targetKey:"regusterid"
})


  
  module.exports =reguster