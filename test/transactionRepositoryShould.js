var sinon = require('sinon');
var should = require('should');

var TransactionRepository = require('../src/TransactionRepository');
var Clock = require('../src/Clock');

describe('Transaction Repository', function(){

    var clock = new Clock();
    var TODAY = '12/05/2015';
    var transactionRepository,
        transactions,
        stubClock;


    beforeEach(function(){
        transactionRepository = new TransactionRepository(clock);
        stubClock = sinon.stub(clock, 'todayAsString');
        stubClock.returns(TODAY);
        transactions = transactionRepository.allTransactions();
    })

    it('should create and store a deposit transaction', function(){
       transactionRepository.addDeposit(100);

       should(transactions.length).be.exactly(1);
       should(transactions[0]).be.eql({'date': TODAY, 'amount': 100});

    });

    it('should create and store a withdrawal transaction', function(){
        transactionRepository.addWithdrawal(100);

        should(transactions.length).be.exactly(1);
        should(transactions[0]).be.eql({'date': TODAY, 'amount': -100});
    });

    afterEach(function(){
        stubClock.restore();
    })

});


