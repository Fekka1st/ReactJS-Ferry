import React from "react";
import { Layout, Menu} from 'antd';
import { MenuOutlined,UserOutlined,TabletOutlined,VideoCameraOutlined,SyncOutlined } from '@ant-design/icons';
import {Link,useHistory} from "react-router-dom"

const { SubMenu } = Menu;
const { Sider } = Layout;
const Siderbar =()=>{
    return(
        <>
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<MenuOutlined />} title="Settings">
            <Menu.Item key="1" icon={<VideoCameraOutlined />}><Link to="/movielist/form">Movie input</Link></Menu.Item>
            <Menu.Item key="2" icon={<TabletOutlined />} ><Link to="/gamelist/form">Game input</Link></Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}><Link to="/change-pasword">Change Password</Link></Menu.Item>
            <Menu.Item key="4" icon={<SyncOutlined spin />}><Link to="/About">About</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
        </>
    )
}
export default Siderbar