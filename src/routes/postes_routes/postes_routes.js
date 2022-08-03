const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE

const get_allpostes_controllers=require("../../controllers/postes-controllers/show-allpostes-controllers")
router.get("/showallpostes",get_allpostes_controllers);


const get_all_likes_on_post=require("../../controllers/postes-controllers/like-on-post-controllers")
router.get("/getlike/:data",get_all_likes_on_post)

const update_rate_posts_controllers=require("../../controllers/postes-controllers/updata-rate-post-controllers")
router.post("/editepost",update_rate_posts_controllers)


const deletPost_controllers=require("../../controllers/postes-controllers/delete-post-controllers")
router.post("/deletePost",deletPost_controllers)




module.exports=router