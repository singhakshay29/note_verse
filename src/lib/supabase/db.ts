import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from 'dotenv';
import * as schema from './../../../migration/schema';
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log("No DataBase Url Found");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migratedb = async () => {
    try {
        console.log('Migrating client');
        await migrate(db, { migrationsFolder: 'migration' })
        console.log('Migrating Succesfully');
    } catch (error) {
        console.log('Migrating Failed ', error)
    }
}
migratedb();


export default db;