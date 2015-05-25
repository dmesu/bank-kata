var sinon = require('sinon');

var Account = require('../src/Account.js');
var TransactionRepository = require('../src/TransactionRepository');
var StatementPrinter = require('../src/StatementPrinter.js');
var Transaction = require('../src/Transaction.js');


describe('Account', function() {

    var transactionRepository = new TransactionRepository();
    var statementPrinter = new StatementPrinter();
    var transactions = new Transaction();
    var account = new Account(transactionRepository, statementPrinter);
    var stubTransactionRepository,
        mockTransactionRepository,
        mockStatementPrinter;

    beforeEach(function () {
        mockTransactionRepository = sinon.mock(transactionRepository);
        mockStatementPrinter = sinon.mock(statementPrinter);
        stubTransactionRepository = sinon.stub(transactionRepository, 'allTransactions');
    });

    it('should store a deposit transaction', function(){
        mockTransactionRepository.expects('addDeposit').once().withExactArgs(100);
        account.deposit(100);
    });

    it('should store a withdrawal transaction', function(){
        mockTransactionRepository.expects('addWithdrawal').once().withExactArgs(100);
        account.withdraw(100);
    });

    it('should print a statement', function(){
        stubTransactionRepository.returns(transactions);
        mockStatementPrinter.expects('print').withExactArgs(transactions);
        account.printStatement();
    });

    afterEach(function () {
        mockStatementPrinter.verify();
        mockTransactionRepository.verify();
        stubTransactionRepository.restore();
    });
});