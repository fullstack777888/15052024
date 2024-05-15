const { pool } = require('./connection')

const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
        pool.query('select * from customers', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results)
        })
    })
}


const getCustomerById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`select * from customers where customerNumber = ?`, [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results)
        })
    })
}

// 'insert into user_name, lastn_name values (?, ?)',[userName, lastName]


module.exports = {
    getAllCustomers,
    getCustomerById
}