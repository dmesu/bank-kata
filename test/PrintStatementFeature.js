var should = require('should');
var sinon = require('sinon');

var Account = require('../src/Account.js');
var Console = require('../src/Console.js');
var Clock = require('../src/Clock.js');
var TransactionRepository = require('../src/TransactionRepository');
var StatementPrinter = require('../src/StatementPrinter');

describe('Print Statement Feature', function(){

    var clock = new Clock();
    var console = new Console();
    var transactionRepository = new TransactionRepository(clock);
    var statementPrinter = new StatementPrinter(console);
    var account = new Account(transactionRepository, statementPrinter);
    var mockConsole;
    var stubClock;

    beforeEach(function(){
        mockConsole = sinon.mock(console);
        stubClock = sinon.stub(clock, 'todayAsString');
    });

    it('should print statement containing all transactions', function(){

        stubClock.returns('01/04/2014');
        account.deposit(1000);
        stubClock.returns('02/04/2014');
        account.withdraw(100);
        stubClock.returns('10/04/2014');
        account.deposit(500);

        mockConsole.expects('printLine').withExactArgs('DATE | AMOUNT | BALANCE').once();
        mockConsole.expects('printLine').withExactArgs('10/04/2014 | 500.00 | 1400.00').once();
        mockConsole.expects('printLine').withExactArgs('02/04/2014 | -100.00 | 900.00').once();
        mockConsole.expects('printLine').withExactArgs('01/04/2014 | 1000.00 | 1000.00').once();

        account.printStatement();
    });

    afterEach(function(){
        mockConsole.restore();
    });

});


