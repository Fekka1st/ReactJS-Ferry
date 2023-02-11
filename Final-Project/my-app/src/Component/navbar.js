import React from "react"
import {Link,useHistory} from "react-router-dom"
import { Layout, Menu} from 'antd';
import Logo from "../assets/img/logo.png"
import "../style/navbar.css"
import Cookies from "js-cookie";
import { HomeOutlined,LogoutOutlined,LoginOutlined} from '@ant-design/icons';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header } = Layout;
const Navbar = () =>{
    let history = useHistory()
    const handleLogout =()=>{
        Cookies.remove('token')
        history.push('/login')


    }

    return(
        <>
    <Header className="header">
  
      <img src={Logo} className="logo"/>
      
      <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1" icon={<HomeOutlined />} ><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/gamelist">Game List</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/movielist">Movie List</Link></Menu.Item>
            {
                Cookies.get('token') === undefined ? <>
                
                <Menu.Item key="4" icon={<LoginOutlined />}style={{position:"absolute" , right:"0"}}><Link to="/login">Sign in</Link></Menu.Item> 
                
                </>: null

            }
            {
                Cookies.get('token') !== undefined ? <Menu.Item onClick={handleLogout} key="4" icon={<LogoutOutlined/>} style={{position:"absolute" , right:"0"}}>Logout</Menu.Item> : null
            }
            
    
 
     
      </Menu>
    </Header>
        </>
    )
}
export default Navbar