import React from 'react'
import './App.css';
import { Layout } from 'antd';
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout';
import { HeaderLayout } from './Layouts/HeaderLayout/HeaderLayout';
import { ContentLayout } from './Layouts/ContentLayout/ContentLayout'
import { FooterLayout } from './Layouts/FooterLayout/FooterLayout'
import 'antd/dist/antd.css';




function App() {
  return (
    <>
        <Layout>

            <MenuLayout />
            <HeaderLayout />

          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <ContentLayout />
            <FooterLayout />

          </Layout>
        </Layout>
    </>
  );
}

export default App;
