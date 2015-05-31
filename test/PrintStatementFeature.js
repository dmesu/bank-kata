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

    beforeEach(function(){
        mockConsole = sinon.mock(console);
    });

    xit('should print statement containing all transactions', function(){

        account.deposit(1000);
        account.withdraw(100);
        account.deposit(500);

        mockConsole.expects('printLine').withExactArgs('DATE | AMOUNT | BALANCE').once();
        mockConsole.expects('printLine').withExactArgs('10/04/2014 | 500.00 | 1400').once();
        mockConsole.expects('printLine').withExactArgs('02/04/2014 | -100.00 | 900').once();
        mockConsole.expects('printLine').withExactArgs('01/04/2014 | 1000.00 | 1000').once();

        account.printStatement();
    });

    afterEach(function(){
        mockConsole.restore();
    });

});


