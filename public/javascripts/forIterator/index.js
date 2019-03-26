/**
 * Created by yang on 2019/1/4.
 */


let arr = [{name: '阿里', id: 1}, {name: 'E园', id: 2}];

let Eid;

for (let i=0; i<arr.length; i++){
  if(arr[i].name === '阿里'){
    Eid = arr[i].id;
  }
}


console.log(Eid);