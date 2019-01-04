/**
 * Created by yang on 2018/10/23.
 */

const obj = {
    toString() {
        return 'fuck';
    }
};

const sym = Symbol(obj);
const sym1 = Symbol(obj);
console.log(sym === sym1); // false

