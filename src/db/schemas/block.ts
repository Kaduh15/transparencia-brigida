import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { User } from './user'

export const Block = pgTable('blocks', {
  id: serial('id').primaryKey(),
  number: integer('number').notNull(),
  representativeId: serial('representative_id').references(() => User.id),
})
