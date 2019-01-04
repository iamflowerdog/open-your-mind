/**
 * Created by yang on 2018/10/16.
 */

// function callback() {
//     console.log('do setTimeout ');
// }
//
// console.log('before setTimeout ');
//
// setTimeout(callback, 0);
//
// console.log('after setTimeout');


function log(param) {
    console.log(param);
}

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







