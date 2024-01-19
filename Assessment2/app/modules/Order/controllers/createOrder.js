const { makePayment } = require('../../../services/payment');
const { insertOrder } = require('../services/order');

const createOrder = async (payload, user) => {
    const order = await insertOrder(payload);
    const paymentInfo = await makePayment(payload, order.id, user, dbTransaction);
    order.transactionId = paymentInfo.id
    return order
}

module.exports = {
  createOrder
}