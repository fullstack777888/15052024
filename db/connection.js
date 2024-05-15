const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'classicmodels'
});

module.exports = {
    pool
}




// pool.query('SELECT * FROM classicmodels.customers;', (error, results, fields ) => {
//     if(error){
//         throw new Error(error)
//     }
//     console.log(results)
// })

// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });