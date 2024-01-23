// In this we are wrapping the payment functionality

const { PAYMENT_MODE } = require("../constants/appConstants");
const { createPaymentIntent: createBrainTreePaymentIntent } = require("../modules/PaymentProcessors/braintree");
const { createPaymentIntent: createPaypalPaymentIntent } = require("../modules/PaymentProcessors/paypal");
const { createPaymentIntent: createStripePaymentIntent } = require("../modules/PaymentProcessors/stripe")

const makePayment = async (payload, orderId, user, transaction) => {
  let transactionResponse
  // We have passed the neccesary info from the controller of order here we call the internal db query if we want some additional information
  switch (payload.paymentMode) {
    case PAYMENT_MODE.STRIPE:
      makeStripePayment();
      break;

    case PAYMENT_MODE.PAYPAL:
      makePaypalPayment()
      break;

    case PAYMENT_MODE.BRAINTREE:
      makeBrainTreePayment()
      break;
  }
  // Now we insert the data in transaction table wih the order id and intentID and return the object
    return transactionData;
}

async function makeStripePayment() {
      //const data =  retrieve the additional info first in data object

      const paymentResponse = await createStripePaymentIntent(payload); //calling create payment function with required payload

      transactionResponse = {} //will manipulate this according to the payment response
}

async function makePaypalPayment() {
//const data = // retrieve the additional info first

const paymentResponse = await createPaypalPaymentIntent(payload);  //calling create payment function with required payload

transactionResponse = {} //will manipulate this according to the payment response
}

async function makeBrainTreePayment() {
 //const data = // retrieve the additional info first

 const paymentResponse = await createBrainTreePaymentIntent(payload);  //calling create payment function with required payload

 transactionResponse = {} //will manipulate this according to the payment response
}

module.exports = {
  makePayment
}