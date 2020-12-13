// 抽象类

class Person1 {
  public readonly _name :string
  constructor( name:string){
    this._name = name
  }
}

const person = new Person1('kunkun')

//person.name = '123'  这种情况不允许变更


// 抽象类 abstract

abstract class Girl{
  abstract skill() // 米有大括号
}

class waiter extends Girl{
   skill(){ // 继承Girl 都要有响应的skill()
     console.log('上菜')
   }
}

class base extends Girl{
  skill(){ // 继承Girl 都要有响应的skill()
    console.log('上菜base')
  }
}

class high extends Girl{
  skill(){ // 继承Girl 都要有响应的skill()
    console.log('上菜high')
  }
}