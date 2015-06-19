var Account = require('src/Account.js');
var TransactionRepository = require('src/TransactionRepository.js');
var Clock = require('src/Clock.js');
var StatementPrinter = require('src/StatementPrinter.js');
var Console = require('src/Console.js');


var console = new Console(console);
var statementPinter = new StatementPrinter(console);
var clock = new Clock();
var transactionRepository = new TransactionRepository(clock)
var account = new Account(transactionRepository, statementPinter);

account.deposit(1000);
account.withdraw(400)
account.deposit(100);

account.printStatement();



