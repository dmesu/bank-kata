
function Transaction(date, amount) {
    this.date = date;
    this.amount = amount;
}

Transaction.prototype.getDate = function (){
    return this.date;
}

Transaction.prototype.getAmount = function (){
    return this.amount;
}

module.exports = Transaction;
