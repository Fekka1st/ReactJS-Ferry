import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Cookies from "js-cookie"
import { useHistory } from 'react-router-dom';

const Changepass = () => {
   let history = useHistory( )
   const [input,setinput] = useState({
    current_password:"",
    new_password:"",
    new_confirm_password:"",
   })

  const onFinish = (event) => {
    console.log(event)

    axios.post('https://backendexample.sanbersy.com/api/change-password',{
    current_password : event.current_password,
    new_password : event.new_password,
    new_confirm_password : event.new_confirm_password
    },{
        headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }

    ).then((e)=>{
      alert("Change Password Berhasil!")
      console.log(e)
      
      history.push('/')
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
      <h1 style={{textAlign:"center",fontSize:"30px",fontFamily:"cursive"}}>Change Password</h1>
      <img style={{width:"400px",marginLeft:"650px",marginRight:"100px",display:"block"}} src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?size=338&ext=jpg"></img> 
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
        label="Current Password "
        name="current_password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input value={input.current_password}/>
      </Form.Item>

      <Form.Item
        label="New Password"
        name="new_password"
        rules={[
          {
            required: true,
            message: 'Please input your New password!',
          },
        ]}
      >
        <Input.Password value={input.new_password}/>
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="new_confirm_password"
        rules={[
          {
            required: true,
            message: 'Please input your password for confirm!',
          },
        ]}
      >
        <Input.Password value={input.new_confirm_password}/>
      </Form.Item>

    

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{borderRadius:"15px"}} type="primary" htmlType="submit">
          Change
        </Button>
       
      </Form.Item>
     
    </Form> 
    </div>
    
    </>
  );
};
export default Changepass