/**
 * Created by yang on 2018/10/12.
 */

let counter1 = require('./util/counter');
let counter2 = require('./util/counter');

console.log(counter1.count()); // 0
console.log(counter1.count()); // 1
console.log(counter2.count()); // 2

// counter.js 并没有因为被require了两次而初始化两次

// 一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。


