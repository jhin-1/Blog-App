import dotenv from 'dotenv';
dotenv.config({path: './config/.env'});

let env = {
    database_Host: process.env.DATABASE_HOST,
    database_User: process.env.DATABASE_USER,
    database_Password: process.env.DATABASE_PASSWORD,
    database_Name: process.env.DATABASE_NAME
}
export default env;