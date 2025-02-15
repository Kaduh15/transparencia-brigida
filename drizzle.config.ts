import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schemas',
  dialect: 'postgresql',
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})