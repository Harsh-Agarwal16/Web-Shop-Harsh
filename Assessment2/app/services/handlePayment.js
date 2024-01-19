// In this we are wrapping the payment functionality

const { PAYMENT_MODE } = require("../constants/appConstants");
const { createPaymentIntentBrainTree } = require("../modules/PaymentProcessors/braintree");
const { createPaymentIntentPaypal } = require("../modules/PaymentProcessors/paypal");
const { createPaymentIntentStripe } = require("../modules/PaymentProcessors/stripe")

const makePayment = async (payload, orderId, user, transaction) => {
  let transactionResponse
  // We have passed the neccesary info from the controller of order here we call the internal db query if we want some additional information
  switch (payload.paymentMode) {
    case PAYMENT_MODE.STRIPE:
      //const data = // retrieve the additional info first in data object

      const paymentResponse = await createPaymentIntentStripe(payload); //calling create payment function with required payload

      transactionResponse = {} //will manipulate this according to the payment response
      break;

    case PAYMENT_MODE.PAYPAL:
      //const data = // retrieve the additional info first

      const paymentResponse = await createPaymentIntentPaypal(payload);  //calling create payment function with required payload

      transactionResponse = {} //will manipulate this according to the payment response
      break;

    case PAYMENT_MODE.BRAINTREE:
      //const data = // retrieve the additional info first

      const paymentResponse = await createPaymentIntentBrainTree(payload);  //calling create payment function with required payload

      transactionResponse = {} //will manipulate this according to the payment response
      break;
  }
  // Now we insert the data in transaction table wih the order id and intentID and return the object
    return transactionData;
}

module.exports = {
  makePayment
}