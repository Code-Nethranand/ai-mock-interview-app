import { neon } from '@neondatabase/serverless';
import schema from './schema';
import { drizzle } from 'drizzle-orm/neon-serverless';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
const db = drizzle({ client: sql, schema });