const express = require('express')
const { add_blog, update, delete_blog, all_blogs, get_blog, get_user_blogs } = require('./blogs.servise')
const router = express.Router()



router.post("/add-blog",add_blog)
router.patch("/update-blog",update)
router.delete("/delete-blog/:id",delete_blog)
router.get("/all-blogs",all_blogs)
router.get("/blog/:id",get_blog)
router.get("/user-blogs/:id",get_user_blogs)



module.exports = router