import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { MonthlyPayments } from './monthly-payments'

export const paymentType = ['representante', 'pix'] as const
export type PaymentType = typeof paymentType[number]

export const pgPaymentType = pgEnum('payment_type', paymentType)

export const paymentStatus = ['pendente', 'confirmado', 'em análise'] as const
export type PaymentStatus = typeof paymentStatus[number]

export const pgPaymentStatus = pgEnum('payment_status', paymentStatus)

export const Payment = pgTable('payments', {
  id: serial('id').primaryKey(),
  monthlyPayment: serial('monthly_payment_id').references(
    () => MonthlyPayments.id
  ),
  payer: text('payer').notNull(),
  amountPaid: integer('amount_paid').notNull(),
  type: pgPaymentType().notNull(),
  confirmed_by: text('confirmed_by'),
  payment_date: timestamp('payment_date', {
    withTimezone: true,
  }),
})
