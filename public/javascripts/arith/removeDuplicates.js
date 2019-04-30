/**
 * Created by yang on 2019/4/28.
 */
/**
 * 1. 创建一个临时空数组，往临时数组里面push元素，已经存在的就不筛选
 * @param arr
 * @returns {Array}
 */
function removeDuplicates(arr) {
  let res = []; // 定义一个临时数组
  for(let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

let arr = [1, 2, 3, undefined, 'undefined', 3]; // 测试用例
console.log(removeDuplicates(arr));

