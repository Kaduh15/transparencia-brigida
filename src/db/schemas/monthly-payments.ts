import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'
import { lot } from './lot'

export const MonthlyPayments = pgTable('monthly_payments', {
  id: serial('id').primaryKey(),
  lotId: serial('lot_id').references(() => lot.id),
  referenceMonth: timestamp('reference_month', {
    withTimezone: true,
  }).notNull(),
  amountPaid: integer('amount_paid').notNull().default(0),
})
