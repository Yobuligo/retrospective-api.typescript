import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";
import { error } from "../shared/utils/error";

configDotenv();

export const db = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? error()),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
