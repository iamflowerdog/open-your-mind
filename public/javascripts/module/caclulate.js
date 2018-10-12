/**
 * Created by yang on 2018/10/12.
 */


console.log(module.exports  === exports);


module.exports = {
    name: 'yyh'
};

exports.name = 'invoker';

console.log(module );
