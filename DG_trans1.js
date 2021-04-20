const pool = require("./db");

// const sql = 'INSERT INTO "PrelimExam"."DG_Supplier"(supplier_name) VALUES ($1) RETURNING *';
// const sql = 'INSERT INTO "PrelimExam"."DG_Customer"(customer_name) VALUES ($1) RETURNING *';
const sql = 'INSERT INTO "PrelimExam"."DG_Product"(product_name, supplier_name) VALUES ($1, $2) RETURNING *';

const data = ['Movies', 'James'];

pool.query(sql, data, (err, res) => {
    if(err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();