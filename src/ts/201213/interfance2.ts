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
  waist ?:number; // 可选值 非必填
  [propname : string]:any ;//其他属性
   say():string;// say 方法 返回值必须为string（必须要返回值）
}

// 继承 会受到约束
interface teacher extends people{
  teach():string
}

// 类的情况 受到约束
class abc implements people{
  name = 'dd'
  age=18
  bust=90
  say(){
    return 'aaaa'
  }
}


let guy1 ={
  name:'123',
  age:17,
  bust:94,
  sex:'female',
  say(){
    return 'hello'
  },
  teach(){
    return 'aaaaa'
  }
}

const filter1 = (guy1:people) =>{
  guy1.age < 24 && guy1.bust >= 90 && console.log(guy1.name+'pass')
  guy1.age>24 && guy1.bust<90 && console.log('lost')
}

const message1 = (guy1:teacher) =>{
  console.log(guy1.age)
  console.log(guy1.bust)
  guy1.waist && console.log(guy1.waist)
  guy1.sex && console.log(guy1.sex)
}

filter1(guy1)

message1(guy1)



