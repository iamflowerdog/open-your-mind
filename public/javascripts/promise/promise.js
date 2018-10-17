/**
 * Created by yang on 2018/10/17.
 */

function log(param) {
    console.log(param);
}



// test()函数有两个参数，这两个函数参数，test() 函数只关心自身的逻辑，并不关心具体的resolve和reject将如何处理结果。
function test(resolve, reject) {
    let timeOut = Math.random() * 2;
    log(`set timeout to: ${timeOut} seconds`);
    setTimeout(function () {
        if(timeOut < 1){
            log('时间刚刚好，成功了，调用 RESOLVE 函数');
            resolve('200 OjbK');
        } else {
            log('时间有点长，调用 REJECT 函数');
            reject(`时间太长了 都已经 ${timeOut}秒了！`);
        }
    }, timeOut * 1000)
}

// 有了执行函数，我们就可以用一个Promise对象来执行它，并在将来某个时刻获得成功或者失败的结果

// let p1 = new Promise(test);
// let p2 = p1.then(function (result) {
//     log('success' + result);
// });
// let p3 = p2.catch(function (reason) {
//     log('defeat' + reason);
// });

// Promise 对象可以串联起来，所以上述代码可以简化为：

new Promise(test).then(function (result) {
    console.log('success' + result);
}).catch(function (reason) {
    log('fulfill' + reason);
});







