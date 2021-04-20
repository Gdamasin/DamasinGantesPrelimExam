const pool = require("./db");

const sql = 'SELECT * FROM "PrelimExam"."DG_Purchase_Order"';

async function exec() {
    try {
        const res = await pool.query(sql);
        console.log(res.rows[1].product_name);
        console.log(res.rows[1].supplier_name);
        console.log(res.rows[1].customer_name);
    } catch(err) {
        console.error(err.message);
    }
    finally {
        pool.end();
    }
}

exec();