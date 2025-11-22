import fetch from "node-fetch";

import { pool } from "./db.js";


const res = await fetch('https://fakestoreapi.com/products');
const products = await res.json();

const conn = await pool.getConnection();

for (const p of products) {
    await conn.query('INSERT INTO products VALUES (?, ?, ?, ?, ?, ?)', [
        p.id,
        p.title,
        p.price,
        p.description,
        p.category,
        p.image
    ]);
}

conn.release();