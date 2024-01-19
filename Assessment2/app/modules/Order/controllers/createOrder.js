const {addTableData} = require('../../../services/dbHelper');
const { makePayment } = require('../../../services/handlePayment');

const createOrder = async (payload, user) => {
     /* We are considering will get order details and amount also the paymentGateway in payload
        1) First we insert a record in order table with the data we get in request body with status "Pending" of payment
        2) Then we create a payment Intent and proceed with the payment (like for now we are making the payment by card)
        3) Then after getting the response from user specific payment gateway we insert a record in transaction table with linking the order ID in payment service which is handlePayment file
        4) Then after getting the webhook we will update the transaction status accordingly which we get the payment webhook status
        we are performing the database operation in db transaction 
      */

    const dataToInsert = {} // In this we are making the object which we need to insert in order table
    const order =  await addTableData('order', dataToInsert, dbTransaction, '*');
    const paymentInfo = await makePayment(payload, order.id, user, dbTransaction);
    order.transactionId = paymentInfo.id
    return order
}

module.exports = {
  createOrder
}