import { Footer } from "antd/lib/layout/layout"
import React from "react"
import Footers from "../Component/footer"
import Navbar from "../Component/navbar"
import Siderbar from "../Component/sidebar"
import { Layout, Menu, Breadcrumb } from 'antd';
import Cookies from "js-cookie"
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Content} = Layout;
const Layoutcomp =(props)=>{

    return(
        <>
    <Layout>
        <Navbar/>
    <Layout>
        {Cookies.get('token')!== undefined ? <Siderbar/> : null}
        <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 1200,
            background:"#ffffff"
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  <Footers/>
            </>
    )
}
export default Layoutcomp