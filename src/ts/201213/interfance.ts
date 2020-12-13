// 初始接口 

// const filter = (name:string,age:number,bust:number) =>{
//   age < 24 && bust >= 90 && console.log(name+'pass')
//   age>24 && bust<90 && console.log('lost')
// }

// const message = (name:string,age:number,bust:number) =>{
//   console.log(age)
//   console.log(bust)
// }

// 对重复的类型注解优化：
interface people {
  name:string;
  age:number;
  bust:number;
  waist ?:number // 可选值 非必填
}

const guy ={
  name:'123',age:17,bust:94
}

const filter = (guy:people) =>{
  guy.age < 24 && guy.bust >= 90 && console.log(guy.name+'pass')
  guy.age>24 && guy.bust<90 && console.log('lost')
}

const message = (guy:people) =>{
  console.log(guy.age)
  console.log(guy.bust)
  guy.waist && console.log(guy.waist)
}

filter(guy)

message(guy)



