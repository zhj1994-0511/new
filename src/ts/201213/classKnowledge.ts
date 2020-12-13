
// 类的概念和使用

class lady{
  content = 'www'
  sayHello(){
    return this.content
  }
}

//继承关系
class two extends lady{
  // sayHello(){
  //   return 'hello word'
  // } // 继承可以重写父类的方法或者属性

  sayHello(){ // 利用super 调用父类的方法 可以对返回值进行简单的更改
    return super.sayHello() +'1111'
  } 
  sayLove(){
    return 'you are too poor'
  }
}



const one = new lady()

const four =new two()

console.log(one.sayHello())
console.log(four.sayLove())