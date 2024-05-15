// const { getAllCustomers, getCustomerById } = require('./db/customers')
const {getAllCustomers} = require('./db/customersKnex')

getAllCustomers().then(customers=>{
    console.log(customers)
})


// getAllCustomers()
//     .then(customers => {
//         for (const customer of customers) {
//             console.log(`${customer.customerName} phone number: ${customer.phone}`)
//         }
      
//     })
//     .catch(err => {
//         console.log(err)
//     })

// getCustomerById(128)
//     .then(customers => {
//         for (const customer of customers) {
//             console.log(`${customer.customerName} phone number: ${customer.phone}`)
//         }
      
//     })
//     .catch(err => {
//         console.log(err)
//     })
