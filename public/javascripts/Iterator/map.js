/**
 * Created by yang on 2018/10/22.
 */


const m = new Map();
const o = {p: 'Hello World'};
const l = {l: 'fuck world'};

m.set(o, 'content');
m.set(l, 'fuck you');
console.log(m.get(o), m.get(l));

const obj = {};
obj[o] = 'content'; // ==>  obj['[object Object]'] = 'content';
obj[l] = 'fuck that!';

console.log(obj, obj[l], obj[o]); //{ '[object Object]': 'fuck that!' } 'fuck that!' 'fuck that!'

// 由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键，这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性名和原作者的属性同名。

console.log(m.has(o)); // true
m.delete(o);
console.log(m.has(o)); // false

