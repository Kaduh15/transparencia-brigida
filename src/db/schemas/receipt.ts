import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { Payment } from './payment'

export const receiptStatus = ['pendente', 'validado', 'recusado'] as const
export type ReceiptStatus = typeof receiptStatus[number]

export const pgReceiptStatus = pgEnum('receipt_status', receiptStatus)

export const Receipt = pgTable('receipts', {
  id: serial('id').primaryKey(),
  paymentId: serial('payment_id').references(() => Payment.id),
  imageUrl: text('image_url').notNull(),
  senderName: text('sender_name').notNull(),
  recipientName: text('recipient_name').notNull(),
  transferredValue: integer('transferred_value').notNull(),
  transferId: text('transfer_id').notNull(),
  status: pgReceiptStatus().notNull().default('pendente'),
  dateOfSend: timestamp('date_of_send', {
    withTimezone: true,
  }).notNull(),
})
