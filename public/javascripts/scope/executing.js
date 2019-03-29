/**
 * Created by yang on 2019/3/29.
 */

show ();

var a = true;

if (a) {
  function show() {
    console.log(1);
  }
} else {
  function show() {
    console.log(2);
  }
}

// show is not a function
// 在预解释的时候，if里面的函数会进行提升，但是不会提升到外面，代码块