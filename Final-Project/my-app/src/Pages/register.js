import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Cookies from "js-cookie"
import { useHistory } from 'react-router-dom';

const Register = () => {
   let history = useHistory( )
   const [input,setinput] = useState({
      name:"",
      email:"",
      password:"",
   })

  const onFinish = (event) => {
    console.log(event)

    axios.post('https://backendexample.sanbersy.com/api/register',{
    name : event.name,
    email : event.email,
    password : event.password
    }).then((e)=>{
      alert("Register Berhasil!")
      console.log(e)
      
      history.push('/login')
    }).catch((e)=>{
      alert(e.response.data)
      console.log(e.response.data)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
     <>
      <h1 style={{textAlign:"center",fontSize:"30px",fontFamily:"cursive"}}>Register</h1>
      <img style={{width:"400px",marginLeft:"700px",marginRight:"100px",display:"block"}} src="https://emergetech.com/wp-content/uploads/2019/01/signup-1.png"></img> 
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
        label="Nama"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input value={input.name}/>
      </Form.Item>

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
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{borderRadius:"15px"}} type="primary" htmlType="submit">
        Register
        </Button>
      </Form.Item>
     
    </Form> 
    </div>
    
    </>
  );
};
export default Register