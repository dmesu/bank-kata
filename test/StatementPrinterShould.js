var sinon = require('sinon');

var Console = require('../src/Console.js');
var StatementPrinter = require('../src/StatementPrinter.js');
var Transaction = require('../src/Transaction.js');

describe('Statement printer', function(){

    var NO_TRANSACTIONS = [];
    var console = new Console();
    var statementPrinter = new StatementPrinter(console);
    var mockConsole;

    beforeEach(function(){
        mockConsole = sinon.mock(console);
    });

    it('should always print the header', function(){
        mockConsole.expects('printLine').once().withExactArgs('DATE | AMOUNT | BALANCE');
        statementPrinter.print(NO_TRANSACTIONS);
    });

    it('should print transactions in reverse chronological order', function(){
        mockConsole.expects('printLine').withExactArgs('DATE | AMOUNT | BALANCE').once();
        mockConsole.expects('printLine').withExactArgs('10/04/2014 | 500.00 | 1400.00').once();
        mockConsole.expects('printLine').withExactArgs('02/04/2014 | -100.00 | 900.00').once();
        mockConsole.expects('printLine').withExactArgs('01/04/2014 | 1000.00 | 1000.00').once();
        var transactions = transactionContaing([deposit('01/04/2014', 1000), withdrawal('02/04/2014', 100), deposit('10/04/2014', 500)]);
        statementPrinter.print(transactions);
    });

    afterEach(function(){
        mockConsole.verify();
    });

    function transactionContaing(transactions){
        return transactions;
    }

    function deposit(date, amount){
        return new Transaction(date, amount);
    }

    function withdrawal(date, amount){
        return new Transaction(date, -amount);
    }

});
