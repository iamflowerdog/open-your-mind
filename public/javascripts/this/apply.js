
console.log(Math.max([1, 2, 3])); // NaN, Math.max方法只接受number类型的参数
console.log(Math.max('1', 'y')); // NaN, Math.max方法只接受number类型的参数

// apply 方法调用一个给定this值的函数，以及作为一个数组（类数组对象）提供的参数
console.log(Math.max.apply(null, [1, 2, 3]));

let arr = [1, 2];
let arr1 = [3, 4];


console.log(arr, arr.concat(arr1)); // arr并不改变，而是新增了一个数组的堆栈

arr.push.apply(arr, [3, 4]);

console.log(arr) // 数组已经变化

