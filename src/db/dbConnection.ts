import { Pool } from "node-postgres";

export const dbPool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "master",
});
