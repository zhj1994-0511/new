

function sum(a,b,c){
   return a+b+c
}


sum(1,2,3)
// 转换

function sum2(a){
  return (b)=>{
    return (c)=>{
       return a+b+c
    }
  }
}
//
sum2(1)(2)(3)


// 高阶函数不使用柯力化的方法

// 在react 直接调用函数

//(event)=>{this.xxx('type',event.target.value)}