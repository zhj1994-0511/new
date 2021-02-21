//...运算符不可以展开对象   {。。。obj}是属于克隆对象 展开  210110

// 利用 props 传参  最简单的方法  ReactDom.render*(<person  age='q'/>.....)  可用 this.props.age 获取  记得{}包住

// 对象传使用 {。。。obj}的方式放在待渲染组件内

// age={19}  number 类型   利用 + 运算换取正数数据 
// props 的类型限制  propTypes     name；PropTypes.string.isRequired  必填 注意引入

//  morzhi  defaultProps{age:18}  string number func    props是只读的不可更改  注意修改和运算的区分
// 类自身增加属性  利用 static 

// react  类中的构造器 constructor需要props 参数  接了参数 但是在super ()时不传 会导致 this.props为undefined 用得少

// 函数式组件 获取props 的值渲染  函数式组件则不然  它通过接受参数的方式进行获取  传入的对象会作为参数 函数式只能玩props

// 函数式组件 PropTypes  需要写在函数外侧 同级  xxx.propTypes

// 
// refs 学习  0111

//  

import React,{Component} from 'react';

class Demo extends Component{

  show =()=>{ // 原生写法
    const node = document.getElementById('#input').value

    console.log(node)
  }

  show2 = ()=>{ // ref 用法
    console.log(this) // this是实例对象  写ref会被收集起来被refs 保存  真实DOM节点
    console.log(this.$refs.input2.value)

  }
  // render(){// 字符串已经不被建议使用了 需要被跟新了  老版字符串类型 可能会在未来版本移除
  //   return(
  //     <div>
  //      <input type="text" placeholder='123' id="input" ref="input1"></input>
  //       <button onClick={this.show}>点击展示</button>
  //       <input type="text" placeholder='123' id="input" ref="input2" onBlur={this.show2}></input>
  //     </div>
  //   )
  // }

  // 回调形式的ref  有调用次数的问题   更新会被执行两次 第二次的参数是DOM 第一次 null  不影响功能、
  // 原因  每次跟新会重新创建渲染
  // 规避方法  

  // render(){
  //   return( //  回调的参数是当前ref 所在的节点  // 给实例创建input1的属性并赋值为当前节点DOM
  //     <div>
  //       <input type="text" ref={(currentNode)=>{this.input2=currentNode}}></input>
  //<input type="text" ref={this.cuurrent} 规避 方法写在class 中></input>
  //     </div>
  //   )
  // }

  change =()=>{
    this.setState({isTrue:!isTuue})
  }

  state={isTrue:true}

  myRef = React.createRef() // 在实例上创建收集ref 的容器  this.myRef.current.value 获取信息 单对单 只能存一个 后覆盖前

  render(){  // createRef() 方式

    const {isTrue} = this.state
    return( //  回调的参数是当前ref 所在的节点  // 给实例创建input1的属性并赋值为当前节点DOM
      <div>
        {/*ssssss注释 */}
        <input type="text" ref={this.myRef}></input>
        <button  onClick={this.change}>123</button>
      </div>
    )
  }

}


