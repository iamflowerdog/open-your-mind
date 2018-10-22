#### Map

- Javascript的对象（Object），本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键。

```
    const data = {};
    const element = document.getElementById('map');
    data[element] = 'metadata';
    console.log(data['[object HTMLHeadingElement]']); // 'metadata'

```
上面代码原意是将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。

- Object结构提供了 `字符串--值`的对应, Map结构提供了 `值--值`的对应，更完善。

