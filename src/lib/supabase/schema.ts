import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaces = pgTable('workspace', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    }),
    workspacesOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    inconId: text('incon_id').notNull(),
    data: text('data'),
    inTrash: text('in_Trash'),
    logo: text('logo'),
    bannerUrl: text('banner_url')
})

export const folders = pgTable('folders', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    }),
    workspacesOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    inconId: text('incon_id').notNull(),
    data: text('data'),
    inTrash: text('in_Trash'),
    bannerUrl: text('banner_url'),
    workspacesId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' })
})

export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    }),
    workspacesOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    inconId: text('incon_id').notNull(),
    data: text('data'),
    inTrash: text('in_Trash'),
    bannerUrl: text('banner_url'),
    folderId: uuid('folder_id').references(() => folders.id, { onDelete: 'cascade' })
})