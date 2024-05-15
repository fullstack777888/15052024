const { knex } = require('./connectionKnex')

// const getAllCustomers = () => {
//     return new Promise((resolve, reject) => {
//         knex.select().from('customers').then(res => {
//             resolve(res);
//         })
//             .catch(
//                 err => {
//                     reject(err)
//                 }
//             )
//     })
// }

const getAllCustomers = async () => {
    try {        
        const res = await knex.select().from('customers')
        return res
    } catch (error) {
        throw new error
    }

}

module.exports = {
    getAllCustomers
}