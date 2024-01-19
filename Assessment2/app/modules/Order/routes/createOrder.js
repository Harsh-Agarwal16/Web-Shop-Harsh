const { createOrder } = require("../controllers/createOrder")
const successResponse = require('../../../constants/successResponse');

const createOrderHandler = async (req, res) => {
    const data = await createOrder(req.body, req.user);
    return res.json({
        message: successResponse.ORDER_PLACED_SUCCESSFULLY,
        data: result,
      });
}