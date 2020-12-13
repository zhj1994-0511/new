// function gettotal(one:number,two:number):number{  // 定义了返回类型
//   return one +two
// }

// const total = gettotal(1,2) // 能自动实现分析



function sayHello():void{   //void  表示无返回值
  console.log('hello')
}


function aaa():never{ // 推断 never
  throw new Error() // 会阻断下面代码的执行 
  console.log('123')
}

// 死循环情况
function ever():never{
  while(true){}
  console.log('123')
}


// 参数为对象时确定参数属性

function add({one,two}:{one:number,two:number}){
  return one + two
}

const total = add({one:1,two:2})



function getNumber({a}:{a:number}){
  return a
}
const a = getNumber({a:1})