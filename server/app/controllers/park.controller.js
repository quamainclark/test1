const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST_IP,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const Park = {
    get: async function (req, res, next) {
        pool.query(`select * from park`, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        });
    },

    set: async function (req, res, next) {
        const { parkData } = req.body;

        pool.query(`update park set parkData = '${JSON.stringify(parkData)}' where id = 1`, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        });
    }
}

module.exports = Park;
