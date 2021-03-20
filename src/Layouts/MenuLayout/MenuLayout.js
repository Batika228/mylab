import React from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined,TeamOutlined,UserOutlined,FileOutlined,VideoCameraOutlined,UploadOutlined,BarChartOutlined,CloudOutlined,
    AppstoreOutlined,ShopOutlined } from "@ant-design/icons"
import { MenuRoot } from "../../helpers/constants";
import { Link } from 'react-router-dom';



const{ Sider } = Layout
const { SubMenu } = Menu;



export const MenuLayout = () => {


   
        return (
        <>
          <Sider 
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }} >
          <div className="logo" />
          <Menu className="ant-menu" theme="dark" defaultSelectedKeys={['4']} mode="inline">


              {
              
              
                  MenuRoot.map((menu) => {
                    
                      return (

                        <Menu.Item key={menu.id} icon={menu.icon }>
                            <Link to={menu.path} > {menu.name}</Link>
                      </Menu.Item>
                      
          
                      
                    

                      )

                      })
              
                    }
              <SubMenu key="sub1" icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Aliance</Menu.Item>
              <Menu.Item key="8">Orda</Menu.Item>
              </SubMenu>
            
              </Menu>
        </Sider>
        </>
    )
    
      }
    


export default MenuLayout;