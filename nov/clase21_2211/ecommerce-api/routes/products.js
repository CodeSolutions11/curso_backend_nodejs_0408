import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM products");
    conn.release();
    res.json(rows);
})


router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT * FROM products WHERE id = ?", [id]);
    console.log(rows);
    conn.release();
    if (rows.length === 0) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(rows);
});

export default router;