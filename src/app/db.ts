import { DBSchema } from '@ngrx/db';

// ngrx/db schema to initialize stores in IndexDB

export const schema: DBSchema = {
  version: 1,
  name: 'books_app',
  stores: {
    books: {
      primaryKey: 'id',
      autoIncrement: true,
    }
  }
};
