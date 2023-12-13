import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const dbconfig = {
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name
}

export const conn = mysql.createConnection(dbconfig)