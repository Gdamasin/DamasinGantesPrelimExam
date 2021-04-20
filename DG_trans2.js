const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."DG_Purchase_Order"(purchase_order, product_name, supplier_name, customer_name) VALUES ($1, $2, $3, $4) RETURNING *';

const data = [1, 'Books', 'Clyde', 'Hansel'];

pool.query(sql,data, (err, res) => {
    if(err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();