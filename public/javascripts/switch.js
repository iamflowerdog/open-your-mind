/**
 * Created by yang on 2018/10/10.
 */

let listWarnConf = [
    {
        warnType: 1,
        warnCondition: 220,
    },
    {
        warnType: 2,
        warnCondition: 36,
    },
    {
        warnType: 3,
        warnCondition: 45,
    },
    {
        warnType: 4,
        warnCondition: 110,
    },
    {
        warnType: 5,
        warnCondition: 380,
    }
];


// 用switch方式往对象里面添加键值对
// listWarnConf.forEach(item => {
//     switch(item.warnType) {
//         case 1:
//             item.warnTypeText = '超压';
//             item.warnConditionText = `电压高于${item.warnCondition}V`
//             break;
//         case 2:
//             item.warnTypeText = '欠压';
//             item.warnConditionText = `电压低于${item.warnCondition}V`
//             break
//         case 3:
//             item.warnTypeText = '超载';
//             item.warnConditionText = `电流高于${item.warnCondition}A`
//             break
//         case 4:
//             item.warnTypeText = '电压不平衡';
//             item.warnConditionText = `电压不平衡高于${item.warnCondition}%`
//             break
//         case 5:
//             item.warnTypeText = '电流不平衡';
//             item.warnConditionText = `电流不平衡${item.warnCondition}%`
//             break;
//         default:
//             item.warnTypeText = 'yyh';
//             item.warnConditionText = 'test';
//     }
// })
//
// console.log(listWarnConf);

// case 执行的都是赋值操作，修改起来比较麻烦；


//设置配置数据 使用策略模式代替 switch
let warnConfig={
    1:{
        warnTypeText:'超压',
        warnConditionText:'电压高于replaceTextV'
    },
    2:{
        warnTypeText:'欠压',
        warnConditionText:'电压低于replaceTextV'
    },
    3:{
        warnTypeText:'超载',
        warnConditionText:'电流高于replaceTextV'
    },
    4:{
        warnTypeText:'电压不平衡',
        warnConditionText:'电压不平衡高于replaceText%'
    },
    5:{
        warnTypeText:'电流不平衡',
        warnConditionText:'电流不平衡高于replaceText%'
    }
};

 listWarnConf.forEach((item) => {
     item.warnTypeText = warnConfig[item.warnType].warnTypeText;
     item.warnConditionText = warnConfig[item.warnType].warnConditionText.replace('replaceText', item.warnCondition)
 });

 console.log(listWarnConf);