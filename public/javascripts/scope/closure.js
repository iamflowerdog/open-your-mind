/**
 * Created by yang on 2019/5/30.
 */
/**
 * Ensure a function is called only once.
 */
function once (fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments)
    } else {
      console.log(called);
    }
  }
}

function test(x) {
  console.log(x);
}

let f = once(test);
