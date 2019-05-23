/**
 * Created by yang on 2019/5/21.
 */
// 一行代码找出一个数组对象里面的最大值

let lamer = [
  { name: 'invoker', age: 15 },
  { name: 'axe', age: 19 }
];

// Math.max() 函数返回一组数中的最大值
// 语法 Math.max(value1[,value2, ...])
// 参数传进一组数值 value1, value2, ...
// 返回值

/**
 @param {...number} x
 @static
 @return {number}
 */
// Math.max = function(x) {};

console.log(Math.max(2, 3, 4)); // 4

console.log(Math.max([1, 2, 3])); // NaN 如果传实参不是数字，会返回 NaN


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray([1, 2, 3])); // 3

console.log(Math.max.apply(null, lamer.map(item => item.age))); // 19

