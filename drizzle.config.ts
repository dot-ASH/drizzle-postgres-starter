import type { Config } from "drizzle-kit";
import { VARIABLES } from "./lib/constants";

export default {
  schema: "./database/schema/*",
  out: "./database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: VARIABLES.DB_HOST,
    user: VARIABLES.DB_USER,
    password: VARIABLES.DB_PASSWORD,
    database: VARIABLES.DB_NAME,
    port: VARIABLES.DB_PORT,
  },
} satisfies Config;
