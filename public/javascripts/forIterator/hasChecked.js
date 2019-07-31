/**
 * Created by yang on 2019/6/27.
 */

function hasChecked(tree) {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i] === 2) {
      return true
    }
  }
  return false
}

console.log(hasChecked([1, 2, 3]));

