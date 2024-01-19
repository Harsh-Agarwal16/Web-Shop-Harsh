const addTableData = (tableName, dataToInsert, dbTransaction, returningFields = '*') => {
if(dbTransaction){
// performing db operation in transaction with the transaction object
} else {
// performing db operation normally
}
};

module.exports = {
    addTableData
}