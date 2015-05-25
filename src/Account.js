
function Account (transactionRepository, statementPrinter) {
    this.transactionRepository = transactionRepository;
    this.statementPrinter = statementPrinter;
}

Account.prototype.deposit = function(amount) {
    this.transactionRepository.addDeposit(amount);
}

Account.prototype.withdraw = function(amount) {
    this.transactionRepository.addWithdrawal(amount);
}

Account.prototype.printStatement = function() {
    this.statementPrinter.print(this.transactionRepository.allTransactions())
}

module.exports = Account;


