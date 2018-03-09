var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(12, 'day');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
var createdAt =1234;
var date2 = moment(createdAt);
console.log(date2.format('h:mm a'))
