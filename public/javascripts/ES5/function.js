/**
 * Created by yang on 2019/5/10.
 */

function sayName(obj) {
  // obj.name = 'axe';
  obj = {};
  obj.name = 'test';
}
let obj = {
  name: 'yyh'
};
sayName(obj);

obj.__proto__.sayHi = function (name) {
  console.log(name);
};


function getMaxOfArrayByCall(array) {
  return Math.max.call(null, ...array); // call() 方法接受的是参数列表
}

console.log(getMaxOfArrayByCall([1, 2]));

function getMaxOfArrayByApply(array) {
  return Math.max.apply(null, array); // apply() 方法接受的是参数数组（或者类数组对象）
}

console.log(getMaxOfArrayByApply([1, 2, 3]));

// bind()方法创建一个新的函数，在调用时设置this关键字为提供的值，并在调用新函数时，
// 将给定的参数列表作为愿参数序列的前若干项。
function getMaxOfArrayByBind(array) {
  return Math.max.bind(null, ...array)(1, 2, 3); // apply() 方法接受的是参数数组（或者类数组对象）
}

console.log(getMaxOfArrayByBind([4, 5]));