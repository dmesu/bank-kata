var should = require('should');

var Clock = require('../src/Clock.js')

describe('Clock', function () {

    var testableClock;

    before(function () {

        function TestableClock() {
        }

        TestableClock.prototype = new Clock();

        TestableClock.prototype.todayAsString = function () {
            return '12/05/2015';
        }

        testableClock = new TestableClock();
    });

    it('should return today date in DD_MM_YYYY', function () {
        var date = testableClock.todayAsString();
        should(date).be.exactly('12/05/2015');
    });

});
