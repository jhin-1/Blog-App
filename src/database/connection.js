const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_app'
});
// check connection database 
connection.connect((err)=>{
  if (err){
    console.log(err)
  }else{
    console.log("database is contcted");
    
  }
})

module.exports = connection