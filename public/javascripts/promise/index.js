/**
 * Created by yang on 2018/10/16.
 */

function callback() {
    console.log('do setTimeout ');
}

console.log('before setTimeout ');

setTimeout(callback, 0);

console.log('after setTimeout');



