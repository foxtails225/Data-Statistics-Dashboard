import mysql from "mysql";
import env from "../config";

const db = mysql.createPool({
  host: env.host,
  user: env.username,
  password: env.password,
  database: env.db,
  port: env.port,
});

export default db;
