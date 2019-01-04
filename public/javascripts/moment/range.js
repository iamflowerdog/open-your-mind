/**
 * Created by yang on 2018/12/4.
 */

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const start = new Date(2012, 0, 15);
const end   = new Date(2015, 4, 23);
const range = moment.range([start, end]);

let y = range.diff('years');
let m = range.diff('months');
let d = range.diff('day');


console.log(y, m, d);
