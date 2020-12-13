let Count : number;
// type annotation  类型注解
Count = 123




// type inference  类型推断

const zhj = 123;
const one = 11;
const three = zhj + one ;  // 能够自动分析数据类别



function getTotal(one:number,two:number){
  return one +two
}

const Total = getTotal(1,2) // 能自动实现分析


const xiaoJieJie = {
  name :'qqqq',
  age : 18
}