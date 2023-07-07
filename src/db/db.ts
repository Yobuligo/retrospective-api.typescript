import { configDotenv } from "dotenv";
import { Pool } from "pg";
import { error } from "../shared/utils/error";

configDotenv();

export const db = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(
    process.env.DB_PORT ??
      error("Error when getting port for db. Port is not defined in .env.")
  ),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
