const express = require("express");
const app = express();
const RouterUsers = require('./src/moduels/users/users.controllr')
const RouterBlogs = require('./src/moduels/blogs/blogs.controllar')

app.use(express.json())
app.use(RouterUsers)
app.use(RouterBlogs)



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
