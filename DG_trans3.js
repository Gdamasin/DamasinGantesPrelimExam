const pool = require("./db");

const sql = 'DELETE FROM "PrelimExam"."DG_Purchase_Order" WHERE purchase_order = $1 RETURNING *';

const data = [2];

pool.query(sql, data, (err, res) => {
    if(err) {
        console.log(err.stack);
    } else {
        console.log("Deleted row: \n");
        console.log(res.rows[0]);
    }
});
pool.end();