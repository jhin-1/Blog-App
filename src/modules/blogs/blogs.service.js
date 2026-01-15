import connection from '../../database/connection.js'

const add_blog = (req,res)=>{
    let{Title,Content,user_id} = req.body
    connection.query(`INSERT INTO blogs (title,content,user_id) VALUES ('${Title}','${Content}','${user_id}')`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if (result.affectedRows === 1) {
            res.json({message:'blog created successfully'});
        }else{
            res.json({message:'blog creation failed'});
        }
    }
    )
}

const update = (req,res)=>{
    let{Title,Content,ID} = req.body
    connection.query(`UPDATE blogs SET title='${Title}',content='${Content}' WHERE ID ='${ID}'`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if (result.affectedRows === 1) {
            res.json({message:'blog updated successfully'});
        }else{
            res.json({message:'blog updated failed'});
        }
    }
    )
}

const delete_blog =(req,res)=>{
    let {ID} = req.params
    connection.query(`DELETE FROM blogs WHERE id='${ID}'`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if (result.affectedRows === 1) {
            res.json({message:'blog deleted successfully'});
        }else{
            res.json({message:'blog deleted failed'});
        }
    })
}
const all_blogs = (req,res)=>{
    // join عشان ترجع ال data بتاعت ال user مع ال blog
    connection.query(`SELECT * FROM blogs JOIN users ON blogs.user_id = users.ID`,(err,result)=>{
        if(err){
            res.json(err)
            return;
        }
        if(result){
            res.json({users:result})
        }else{
            res.json({message:"users Not founde"})
        }
    })
    
}
const get_blog= (req,res)=>{
    let {id} = req.params
    connection.query(`SELECT * FROM blogs WHERE id = '${id}'`,(err,result)=>{
        if(err){
            res.json(err)
            return;
        }
        if(result.length > 0){
            res.json({blog:result})
        }else{
            res.json({message:"blog Not founde"})
        }
    })
}
const get_user_blogs = (req,res)=>{
    let {id} = req.params;
    connection.query(`SELECT * FROM blogs WHERE user_id = '${id}'`,(err,result)=>{
        if(err){
            res.json(err)
            return;
        }
        if(result.length > 0){
            res.json({blogs:result})
        }else{
            res.json({message:"blogs Not founde"})
        }
    })
}
export {
    add_blog,
    update,
    delete_blog,
    all_blogs,
    get_blog,
    get_user_blogs,
}