/**
 * Created by yang on 2019/3/25.
 */


let treeData = [
  {
    id: 1,
    sub: [
      {
        id: 2,
        sub: [
          {
            id: 12,
            sub: [
              {
                id: 13
              },
              {
                id: 14
              }
            ]
          },
          {
            id: 3,
            sub: [
              {
                id: 4,
              },
              {
                id: 9,
                sub: [
                  {
                    id: 10,
                  },
                  {
                    id: 11
                  }
                ]
              }
            ]
          },
          {
            id: 7,
            sub: [
              {id: 8},
            ]
          }
        ]
      },
      {
        id: 5,
        sub: [
          {id: 6},
        ]
      }
    ]
  },
  {
    id: 100
  }
]
let currentId = 100  // 当前id
let arr = [] // 定义数组，存放当前id的直系父ids

/**
 * 根据当前子节点的id，查询所有父节点的id
 * @param data
 * @returns {number}
 */
function getParentsIds(data) {
  for (let i = 0; i < data.length; i++) {
    let temp = data[i]
    if (temp.id == currentId) {
      arr.push(temp.id);
      return 1
    }
    if (temp && temp.sub && temp.sub.length > 0) {
      let t = getParentsIds(temp.sub)
      if (t == 1) {
        arr.push(temp.id)
        return 1
      }
    }
  }
}

getParentsIds(treeData);

console.log(arr);