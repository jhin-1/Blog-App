import express ,{json} from "express";
import RouterUsers from"./modules/users/users.controller.js";
import RouterBlogs  from './modules/blogs/blogs.controller.js';

export const bootstrap = () => {
    const app = express();
    app.use(json());
    app.use(RouterUsers)
    app.use(RouterBlogs)
    const PORT = 3000;
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});
}