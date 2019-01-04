/**
 * Created by yang on 2018/11/8.
 */
function getTree(tree = []) {
    let arr = [];
    if (!!tree && tree.length !== 0) {
        tree.forEach(item => {
            let obj = {};
            obj.title = item.name;
            obj.expand = true;
            obj.selected = true;
            obj.children = getTree(item.childs); // 递归调用
            arr.push(obj);
        });
    }
    return arr;
}

let treeData = [
    {
        name: '意园股份',
        expand: true,
        childs: [
            {
                name: '总裁办',
            },
            {
                name: '空间产品中心',
                expand: true,
                childs: [
                    {
                        title: '空间产品设计部'
                    },
                    {
                        title: '工程部'
                    }
                ]
            },
            {
                name: '招商运营中心',
                expand: true,
                childs: [
                    {
                        title: '招商部'
                    }
                ]
            }
        ]
    }
];

console.log(getTree(treeData));

