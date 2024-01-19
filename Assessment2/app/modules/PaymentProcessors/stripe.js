// In this first we make an instance of stripe then we have some functions which required to make a payment

const createPaymentIntentStripe = async (payload) => {
    /* In this first we get neccessary data for making the payment like cardDetail 
       and then we make a payment with specifict amount  and metadata so that we can 
       identify the transaction when we get the webhook*/
    try {
        const intentData = await functionToMakeAnPayment();
        return intentData;
    } catch (err) {
        console.log(err);
        throw err
    }
}

module.exports = {
    createPaymentIntentStripe
}