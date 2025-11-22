import mariadb from 'mariadb';

export const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '14902520',
  database: 'ecommerce',
});