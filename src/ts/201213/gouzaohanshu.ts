//类的构造函数

class Person {
  // public name:string;
  // constructor(name:string){
  //   this.name = name
  // }

  //简化

  constructor(public name:string){}
}

class teacher extends Person{
  constructor(public age:number){
    super('222')
  }
}

const P1 = new teacher(18)

console.log(P1.name)
console.log(P1)