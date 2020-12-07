import React,{Component} from 'react';


import {Form,Input,Button,Icon} from 'antd'

import './css/login.less'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span:24 },
};


const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

export default  class Login extends Component{

  render(){
    return (

      <div className="login">
        <header className="login-header">
      
        </header>

        <section className="login-section">

          <h3>巴海之页面</h3>

          <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
            <Form.Item  {...tailLayout}>
              <Button type='primary' className="button">登录</Button>
            </Form.Item>
          </Form>

        </section>
      </div>
    )
  }
}


// 新版的antd 需要用 form.item 才会出现校验情况  学习ts