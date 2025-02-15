import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core'
import { Block } from './block'

export const lot = pgTable('lot', {
  id: serial('id').primaryKey(),
  blockId: serial('block_id').references(() => Block.id),
  number: integer('number').notNull(),
  originalOwner: text('original_owner').notNull(),
  acquirer: text('acquirer'),
  irrigatedArea: integer('irrigated_area').notNull().default(0),
  sequeiroArea: integer('sequeiro_area').default(0),
})
