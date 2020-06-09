import * as _ from 'lodash';
export const formatNumberToMoney = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
/**
 * 
 * @param {Array} transactions list transactions
 * @param {Array} duplicated_lst contain transaction id which have multi transaction from one category
 * @description If transaction is duplicated, it will be merged with total amount of all transactions
 * @return {Object} new object 
 * @example { label: 'category_name', y: 'amount_total' }
 */
export const mergeDupTransactionByCategory = (transactions, duplicated_lst) => {
    return duplicated_lst.map(tran_cat => {
        const transactions_by_cat = transactions.filter(tran => tran.category === tran_cat);
        const amount_total =
            transactions_by_cat
                .map(tran => tran.action === "IN" ? parseFloat(tran.amount) : -parseFloat(tran.amount))
                .reduce((prev, curr) => prev + curr, 0);
        console.log("amount: " + amount_total);
        return { label: transactions_by_cat[0].category_name, y: `${amount_total}` };
    })
}