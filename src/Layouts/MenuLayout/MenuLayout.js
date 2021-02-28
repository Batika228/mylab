import React from 'react'
import { Layout, Menu } from 'antd'
import { VideoCameraOutlined,UploadOutlined,BarChartOutlined,CloudOutlined,
    AppstoreOutlined,TeamOutlined,ShopOutlined,UserOutlined } from "@ant-design/icons"


const{ Sider } = Layout

export const MenuLayout = () => {

        return (
            <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
              </Menu.Item>
      
            </Menu>
          </Sider>
        )


}


export default MenuLayout;