import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export async function testConnection() {
  try {
    await db.getConnection();
    console.log("connected to database");
  } catch (error) {
    console.log("failed: ", error);
  }
}

export async function query(command, values) {
  try {
    const [value] = await db.query(command, values ?? []);
    return value;
  } catch (error) {
    console.log("error: ", error);
  }
}

export default db;
