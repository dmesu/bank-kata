
var Transaction = require('../src/Transaction');

function TransactionRepository(clock) {
    this.clock = clock;
    this.transactions = [];
}

TransactionRepository.prototype.addDeposit = function(amount) {
    var deposit = new Transaction(this.clock.todayAsString(), amount)
    this.transactions.push(deposit);
}

TransactionRepository.prototype.addWithdrawal = function(amount) {
    var withdrawal = new Transaction(this.clock.todayAsString(), -amount)
    this.transactions.push(withdrawal);
}

TransactionRepository.prototype.allTransactions = function() {
    return this.transactions;
}

module.exports = TransactionRepository;