import mysql from "mysql";
import env from "../config";

const db = mysql.createConnection({
  host: env.host,
  user: env.username,
  password: env.password,
  database: env.db,
  port: env.port,
});

db.connect(function (err) {
  if (err) throw err;
});

export default db;
