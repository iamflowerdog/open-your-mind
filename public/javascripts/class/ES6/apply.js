/**
 * Created by yang on 2019/7/30.
 */
console.log(Array.prototype.concat.apply([3], [1, 2, [5]]));


// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

console.log(simpleNormalizeChildren([{ id: 2 }, [{ id: 3 }, [{id: 4}]]]));