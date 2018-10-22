## Promise

#### 历史由来 

- 在Javascript的世界中，所有代码都是单线程执行 ES6提出新语法，由于这个缺陷，导致浏览器事件都必须异步执行。


#### 基本用法

- Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
- 他们是两个函数，由Javascript引擎提供，不用自己部署。
- 下面手写一个实例：

```
let promise = new Promise(function (resolve, reject) {
    let timeout = Math.random() * 2;
    log(`set timeout to: ${timeout} seconds`);
    if(timeout < 1) {
        log('call resolve()');
        resolve('200 OK');
    } else {
        log('call reject()');
        reject(`timeout ${timeout} seconds`);
    }
})

```

#### `Promise.prototype.then()`

- Promise 实例具有then方法，定义在Promise原型对象 Promise.prototype上

```

/**
@param {function(T): (Promise.<TResult> | TResult)} [onFulfilled]
@param {function(*): (Promise.<TResult> | TResult)} [onRejected]
@return {Promise.<TResult>}
@template TResult
*/
Promise.prototype.then = function(onFulfilled,onRejected) {};

```

- then方法的第一个参数是Resolve状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。


#### `Promise.prototype.catch()`

- `Promise.prototype.catch`方法是`.then(null, rejection)`的别名，用于指定发生错误时的回调函数。

```
new Promise(function (resolve, reject) {
    let timeout = Math.random() * 2;
    log(`set timeout to: ${timeout} seconds`);
    if(timeout < 1) {
        log('call resolve()');
        resolve('200 OK');
    } else {
        log('call reject()');
        reject(`timeout ${timeout} seconds`);
    }
}).then(function (r) {
    log(r)
}).then(null, function (err) {
    log(err);
});

```

- 也可以这样写

```
new Promise(function (resolve, reject) {
    let timeout = Math.random() * 2;
    log(`set timeout to: ${timeout} seconds`);
    if(timeout < 1) {
        log('call resolve()');
        resolve('200 OK');
    } else {
        log('call reject()');
        reject(`timeout ${timeout} seconds`);
    }
}).then(function (r) {
    log(r)
}).catch(function (err) {
    log(err);
});

```



















