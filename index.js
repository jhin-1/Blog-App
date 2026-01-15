import express from "express";
const app = express();
import RouterUsers from"./src/moduels/users/users.controller.js";
import RouterBlogs  from './src/moduels/blogs/blogs.controller.js';

app.use(express.json())
app.use(RouterUsers)
app.use(RouterBlogs)



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
