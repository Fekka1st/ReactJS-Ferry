import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Cookies from "js-cookie"
import { useHistory,Link } from 'react-router-dom';

const Login = () => {
   let history = useHistory( )
   const [input,setinput] = useState({
      email:"",
      password:""
   })

  const onFinish = (event) => {
   // console.log(event)

    axios.post('https://backendexample.sanbersy.com/api/user-login',{
      email : event.email,
      password : event.password
    }).then((e)=>{
      alert("Login Berhasil!")
      console.log(e.data)
      let token = e.data.token
      Cookies.set('token',token,{expires :1 })
      history.push('/')
    }).catch((e)=>{
      alert(e)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
     <>
      <h1 style={{textAlign:"center",fontSize:"30px",fontFamily:"cursive"}}>LOGIN</h1>
      <img style={{width:"400px",marginLeft:"650px",marginRight:"100px",display:"block"}} src="https://www.indotyre.co.id/images/login.png"></img> 
      <div style={{width:"400px",textAlign:"center",marginLeft:"600px",marginRight:"100px",display:"block"}}>
  
    <Form
    
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      method="post"
    >
        
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
          },
        ]}
      >
        <Input value={input.email}/>
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
        <Input.Password value={input.password}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{borderRadius:"15px"}} type="primary" htmlType="submit">
          Login
        </Button>
        <Link to="/register">
        <Button style={{borderRadius:"15px",marginLeft:"15px"}} type="primary" htmlType="submit">
          Register
        </Button>
        </Link>
       
       
      </Form.Item>
     
    </Form> 
    </div>
    
    </>
  );
};
export default Login