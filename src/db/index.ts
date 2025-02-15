import { env } from '@/env'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schemas'

export const client = postgres(env.DATABASE_URL, {
  connect_timeout: 10000,
  max: 10,
})
export const db = drizzle(client, {
  schema,
  logger: true,
})
