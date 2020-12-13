const numArr : number[] = [1,2,3];

const strArr : string[] = ['1'];

const undefinedArr :undefined[] = [undefined];

// 混合
const arr :(number | string)[] = [1,'2'];

// 常规定义对象数组
const person :{name:string,age:number}[] = [
  {name:'111',age:16},
  {name:'222',age:32}
]


// 类别别名
type lady = {name:string,age:number}
const person2 :lady[] = [
  {name:'111',age:16},
  {name:'222',age:32}
]

// 类  class

class lady2 {
  name:string;
  age:number
}

const person3 :lady2[] = [
  {name:'111',age:16},
  {name:'222',age:32}
]