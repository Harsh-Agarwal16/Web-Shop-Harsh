const {addTableData} = require('../../../services/dbHelper');

const insertOrder = async () => {
    const dataToInsert = {} // In this we are making the object which we need to insert in order table
    const order =  await addTableData('order', dataToInsert, dbTransaction, '*');
    return order;
}

module.exports = {
    insertOrder
}