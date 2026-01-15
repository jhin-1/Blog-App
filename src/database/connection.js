import mysql from"mysql2";

import env from '../../config/env.service.js';

const connection = mysql.createConnection({
  host: env.database_Host,
  user: env.database_User,
  password: env.database_Password,
  database: env.database_Name
});
// check connection database 
connection.connect((err)=>{
  if (err){
    console.log(err)
  }else{
    console.log("database is contcted");
    
  }
})

export default connection