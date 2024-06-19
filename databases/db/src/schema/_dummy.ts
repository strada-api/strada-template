import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const _dummy = pgTable('_dummy', {
  id: serial('id'),
  name: text('name'),
  address: text('address')
});
