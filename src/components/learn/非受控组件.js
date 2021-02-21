import React,{Component} from 'react';

class Form2 extends Component{ //页面中所有输入雷的DOM都收入到状态中维护 受控组件建议使用 减少ref 的使用

  
  state ={
    userName:'',
    password:''
  }
  show =(event)=>{
    event.preventDefault()
     console.log(this.myRef1.value)
  }
  demo =(event)=>{// 随着数据变更 值被写入状态内
    this.setState({userName:event.target.value})
  }

  myRef1 = React.createRef()
  myRef2 = React.createRef()
   

  render(){ // 阻止表单默认行为
    return(
      <form action="" onSubmit={this.show}>
        用户名：<input type="text" name="userNmae" onChange={this.demo} />
        密码：<input type="password" name="password" />
        <button>denglu </button>
      </form>
    )
  }
}