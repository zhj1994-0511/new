// 生命周期函数
import { Divider } from 'antd';
import React,{Component} from 'react';
class Life extends Component{


  end = ()=>{
  // 卸载组件
  ReactDOM.unmountComponentAtNode(document.getElementById('text'))
  }

// 变更透明度
  change =()=>{  // 写在render 时会触发反复重新加载的bug
    setInterval(()=>{
     let now = this.state.opacity - 0.1
     if(now <= 0){ // 计算数值时有坑
       now = 1
     }
      this.setState({opacity:now})
    },200)
  }

  state ={
    opacity:1
  }


  render(){
    return(
      <div>

        <h2 style={{opactiy:this.state.opacity}}>2222222222222</h2>
        <button onClick={this.end}>xxxxx</button>
      </div>
    )
  }
}


// 旧的生命周期函数

// cinstructor()

// componentDidMount()  组件挂载完毕

// componentWillUnmount()// 组件即将卸载

// render() 


// componentWillReceiveProps()  接收打参数为父组件传递的props

// shouldComponentUpdate() 《- setState() 、、// 跟新的阀门 不写会默认补上返回值为 true 的函数  写了以写的逻辑为主 阻断跟新或者继续

// componentWillUpdata    forceUpdata()  很少见  强制根系  this.forceUpdata()

// 卸载组件 从dom上  ReactDom.unmountComponentAtNode(....)


// 三处will 的钩子都是会被不安全的
// 父组件 render()流程 

//  新的钩子 
// getDrivedStateFromProps    新钩子但是了解即可   从 props 获取派生状态 使用场景很少

// 重点 getSnapshotBeforeUpdate()  位于 render 以及update 之间的钩子  在跟新之前获取快照 在最近一次渲染之前调用

// 利用快照获取一些跟新之前的信息 使用场景  
// list.scrollTop  list.scrollHeight css 属性拓展

//接收就的 props state
// componentDidUpdate(preProps,preState，value)  接收getSnapshotBeforeUpdate钩子的返回值 调用后意味着组件完成跟新