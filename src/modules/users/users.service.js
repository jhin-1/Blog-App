import connection from '../../database/connection.js'

const sign_up = (req,res)=>{
    let {name,email,password} = req.body
    connection.query(`INSERT INTO users (name,email,password) VALUES ('${name}','${email}','${password}')`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if (result.affectedRows === 1) {
            res.json({message:'User created successfully'});
        }else{
            res.json({message:'User creation failed'});
        }
    }
    )
}

const login = (req,res)=>{
    let{Email,password} = req.body;
    connection.query(`SELECT * FROM users WHERE email = '${Email}' AND password = '${password}'`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if(result){
            res.json({message:"login sucssesfuly "},result)
            return;
        }else{
            res.json({message:"NOT Found"})
        }
    })
}

const profile_user = (req,res)=>{
    let {id} = req.params 
    connection.query(`SELECT * FROM users WHERE id = ${id}`, (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            res.json({user:result})
        }else{
            res.json({message:"user Not Found!"})
        }   
    })

}

export  {
    sign_up,
    login,
    profile_user,
}