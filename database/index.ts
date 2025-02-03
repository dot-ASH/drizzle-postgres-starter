import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { VARIABLES } from "@/lib/constants";
import { userSchema } from "./schema/users";

const schema = {
  ...userSchema,
};

const connectionString = VARIABLES.DB_URL;
const client = postgres(connectionString);
export const db = drizzle(client, { schema });
