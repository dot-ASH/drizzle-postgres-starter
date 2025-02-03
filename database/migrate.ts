import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { VARIABLES } from "@/lib/constants";

const migrationClient = postgres(VARIABLES.DB_URL, { max: 1 });

async function main() {
  const db = drizzle(migrationClient);
  console.log("Running migrations...");

  await migrate(db, { migrationsFolder: "database/migrations" });

  console.log("Migrations completed!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed!");
  console.error(err);
  process.exit(1);
});
