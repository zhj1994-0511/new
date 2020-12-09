let obj : number = 1;  // count 只能被number 赋值 count 此时可以继承使用number的属性和方法

interface DUDU {
  name :string,
  age : number
}


const xiaohong : DUDU = {
  name :'小黄',
  age :18
}

console.log(xiaohong.age)