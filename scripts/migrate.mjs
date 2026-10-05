import { readFile } from 'node:fs/promises';
import { Pool } from 'pg';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is missing. Add it to .env.local first.');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
const client = await pool.connect();
try {
  await client.query('create table if not exists schema_migrations (filename text primary key, applied_at timestamptz not null default now())');
  const migration = '001_waitlist.sql';
  const applied = await client.query('select filename from schema_migrations where filename = $1', [migration]);
  if (!applied.rowCount) {
    await client.query('begin');
    await client.query(await readFile(new URL(`../db/migrations/${migration}`, import.meta.url), 'utf8'));
    await client.query('insert into schema_migrations (filename) values ($1)', [migration]);
    await client.query('commit');
    console.log(`Applied ${migration}`);
  } else console.log(`${migration} already applied`);
} catch (error) { await client.query('rollback').catch(() => {}); throw error; } finally { client.release(); await pool.end(); }
