import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const userRole = ['admin', 'representante'] as const
export type UserRole = typeof userRole[number]

export const pgUserRole = pgEnum('user_role', userRole)

export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  role: pgUserRole(),
  created_at: timestamp('created_at', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
})