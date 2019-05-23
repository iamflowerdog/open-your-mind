/**
 * Created by yang on 2019/5/10.
 */

let o = {};

o.prop = 'exists';

o.hasOwnProperty('prop'); // true
o.hasOwnProperty('toString'); // false
o.hasOwnProperty('hasOwnProperty'); // false


var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

console.log(foo.hasOwnProperty('bar')); // 始终返回 false

console.log({}.hasOwnProperty.call(foo, 'bar'));

console.log(Object.prototype.hasOwnProperty.call(foo, 'bar'));