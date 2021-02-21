// react 的事件处理
// 通过 onXxx属性指定事件处理函数  
// 自己二次封装的函数 为了兼容性   事件委托的方式处理  委托给了最外层的元素 为了高效

// 事件委托的原理：事件冒泡


// 通过 event，target 获取DOM对象 不建议过渡使用ref


//受控组件 页面内所有dom的内容都是现用现取的


import React,{Component} from 'react';

class Form2 extends Component{

  show =(event)=>{
    event.preventDefault()
     console.log(this.myRef1.value)
  }
  
  myRef1 = React.createRef()
  myRef2 = React.createRef()

  // 高阶组件的使用   以函数作为参数或者返回值得函数  //#region   ----- //#endregion     用于折叠代码
  // 常见的高阶函数 ：promise  定时器 数组常见方法


  // 函数的柯力化  多次接受参数统一处理的函数编码形式 通过函数调用继续返回函数的形式
  high = (type)=>{  // 封装用以变更既定的变量模式
     console.log(type)
     return (event) =>{
       this.setState({[type]:event.target.value})
     }
  }
   
  render(){ // 阻止表单默认行为
    return(
      <form action="" onSubmit={this.show}>
        用户名：<input type="text" name="userNmae" ref={this.myRef1}/>
        密码：<input type="password" name="password" ref={this.myRef2}/>
        <button>denglu </button>
      </form>
    )
  }
}