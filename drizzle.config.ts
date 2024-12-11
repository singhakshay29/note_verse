import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });


if (!process.env.DATABASE_URL) {
    console.log('Cannot Find Database');
}
