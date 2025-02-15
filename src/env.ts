import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export type Env = z.infer<typeof envSchema>

export const env = envSchema.parse(process.env)