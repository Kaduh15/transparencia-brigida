import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const userType = ['admin', 'representante'] as const
export type UserType = typeof userType[number]

export const pgUserType = pgEnum('user_type', userType)

export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  type: pgUserType(),
  created_at: timestamp('created_at', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
})