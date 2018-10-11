
// 例子，使用全局的 console
console.log('你好世界');
// 打印: '你好世界'到 stdout。
console.log('你好%s', '世界');
// 打印: '你好世界'到 stdout。
// console.error(new Error('错误信息'));
// 打印: [Error: 错误信息]到 stderr。

const name = '描述';
// console.warn(`警告${name}`);
// 打印: '警告描述'到 stderr。


console.count('r');

console.count('r');

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }])

console.time('100-elements');

for (let i = 0; i < 100; i++){}

console.timeEnd('100-elements');