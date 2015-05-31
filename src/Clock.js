var moment = require('moment');

var DD_MM_YYYY = "DD/MM/YYYY";

function Clock() {
}

Clock.prototype.todayAsString = function(){
    var timeNow = today();
    return timeNow.format(DD_MM_YYYY);
}

function today() {
    return moment();
}

module.exports = Clock;
