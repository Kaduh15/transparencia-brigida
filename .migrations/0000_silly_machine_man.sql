CREATE TYPE "public"."payment_status" AS ENUM('pendente', 'confirmado', 'em análise');--> statement-breakpoint
CREATE TYPE "public"."payment_type" AS ENUM('representante', 'pix');--> statement-breakpoint
CREATE TYPE "public"."receipt_status" AS ENUM('pendente', 'validado', 'recusado');--> statement-breakpoint
CREATE TYPE "public"."user_type" AS ENUM('admin', 'representante');--> statement-breakpoint
CREATE TABLE "blocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"number" integer NOT NULL,
	"representative_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lot" (
	"id" serial PRIMARY KEY NOT NULL,
	"block_id" serial NOT NULL,
	"number" integer NOT NULL,
	"original_owner" text NOT NULL,
	"acquirer" text,
	"irrigated_area" integer DEFAULT 0 NOT NULL,
	"sequeiro_area" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "monthly_payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"lot_id" serial NOT NULL,
	"reference_month" timestamp with time zone NOT NULL,
	"amountPaid" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"monthly_payment_id" serial NOT NULL,
	"payer" text NOT NULL,
	"amountPaid" bigint NOT NULL,
	"type" "payment_type" NOT NULL,
	"confirmed_by" text,
	"payment_date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "receipts" (
	"id" serial PRIMARY KEY NOT NULL,
	"payment_id" serial NOT NULL,
	"image_url" text NOT NULL,
	"sender_name" text NOT NULL,
	"recipient_name" text NOT NULL,
	"transferredValue" bigint NOT NULL,
	"transfer_id" text NOT NULL,
	"status" "receipt_status" DEFAULT 'pendente' NOT NULL,
	"date_of_send" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"type" "user_type",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_representative_id_users_id_fk" FOREIGN KEY ("representative_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lot" ADD CONSTRAINT "lot_block_id_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."blocks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "monthly_payments" ADD CONSTRAINT "monthly_payments_lot_id_lot_id_fk" FOREIGN KEY ("lot_id") REFERENCES "public"."lot"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_monthly_payment_id_monthly_payments_id_fk" FOREIGN KEY ("monthly_payment_id") REFERENCES "public"."monthly_payments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "receipts" ADD CONSTRAINT "receipts_payment_id_payments_id_fk" FOREIGN KEY ("payment_id") REFERENCES "public"."payments"("id") ON DELETE no action ON UPDATE no action;