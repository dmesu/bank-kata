var STATEMENT_HEADER = 'DATE | AMOUNT | BALANCE';

function StatementPrinter(console) {
    this.console = console;

}

StatementPrinter.prototype.print = function (transactions) {
    var that = this;
    this.console.printLine(STATEMENT_HEADER);
    this.runningBalance = 0;

    transactions.map(function (transaction) {
        return statementLine(transaction, that);
    }).forEach(function (statementLine) {
        that.console.printLine(statementLine);
    });
}

function statementLine(transaction, that) {
    that.runningBalance += transaction.getAmount();
    return transaction.getDate() + ' | ' + transaction.getAmount().toFixed(2) + " | " + that.runningBalance.toFixed(2);
}

module.exports = StatementPrinter;