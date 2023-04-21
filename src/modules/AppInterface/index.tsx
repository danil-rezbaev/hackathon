import React, { FC, ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Button from 'antd/lib/button';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export type InterfaceProps = {
  children: ReactNode
}

const Interface: FC<InterfaceProps> = (props) => {
  const {
    children
  } = props

  const [collapsed, setCollapsed] = useState(false);
  const contentMargin = collapsed ? 0 : "200px"

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: contentMargin, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: colorBgContainer, flexGrow: 0, textAlign: 'left' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined color="white" /> : <MenuFoldOutlined color="white" />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial', flexGrow: 1, height: '100%' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer, height: '100%' }}>
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', flexGrow: 0 }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Interface;
