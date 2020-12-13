
// 类的getter setter static

class xiao{
  constructor(private _age:number){}
  get age(){ // 可以你对返回值包装
     return this._age -10
  }

  set age(age:number){
    this._age = age +3
  }
}

const Pone = new xiao(18)
Pone.age = 30 // 通过set 设置

console.log(Pone.age) // 通过get 读取



// 静态类 static

class girl{
 static sayHello(){
    return 'byebye'
  }
}

const male = new girl()

// 静态可以跳过构建对象直接使用类的方法
console.log(girl.sayHello)