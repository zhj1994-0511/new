// 类的访问类型  private  public protected

// 类的内部和类的外部
class Preson{
  // 默认公用   内部外部都可以使用
 public name:string;

 public sayHello(){
   console.log(this.name + '123')
 };
 // 私有 只能在类的内部使用
 private age :number;
// 私有 但是在继承时允许使用
 protected bust :number;
}

class p2 extends Preson{
  public sayWord(){
    this.bust
  }
}
const p1 = new Preson()
p1.name = 'dadudu'
p1.sayHello()

console.log(p1.name)