ALTER TYPE "public"."user_type" RENAME TO "user_role";--> statement-breakpoint
ALTER TABLE "monthly_payments" RENAME COLUMN "amountPaid" TO "amount_paid";--> statement-breakpoint
ALTER TABLE "payments" RENAME COLUMN "amountPaid" TO "amount_paid";--> statement-breakpoint
ALTER TABLE "receipts" RENAME COLUMN "transferredValue" TO "transferred_value";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "type" TO "role";