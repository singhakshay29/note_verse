CREATE TABLE "workspace" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"workspace_owner" uuid NOT NULL,
	"title" text NOT NULL,
	"incon_id" text NOT NULL,
	"data" text,
	"in_Trash" text,
	"logo" text,
	"banner_url" text
);
