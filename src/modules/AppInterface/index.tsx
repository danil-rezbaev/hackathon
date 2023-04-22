import React, { FC, ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { MenuProps, Space, Typography } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Button from 'antd/lib/button';
import logo from './images/companyLogo.svg';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {icon: HomeOutlined, label: 'Все заказы', link: '/orders'},
  {icon: UnorderedListOutlined, label: 'Отклики', link: '/companyProfile'},
  {icon: ClockCircleOutlined, label: 'В работе', link: '/companyProfile'},
  {icon: CheckCircleOutlined, label: 'Выполненные заказы', link: '/companyProfile'},
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: (
    <Link to={item.link}>
      {item.label}
    </Link>
  )
}));

export type InterfaceProps = {
  status: boolean,
  children: ReactNode
}

const AppInterface: FC<InterfaceProps> = (props) => {
  const {
    status,
    children
  } = props

  const [collapsed, setCollapsed] = useState(false);
  const contentMargin = collapsed ? '0' : "0"
  const buttonWidth = collapsed ? 64 : 64

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if(!status) {
    return <>{children}</>
  }

  return (
    <Layout >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          minWidth: '250px',
          maxWidth: '250px',
        }}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: contentMargin, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        <Header style={{ padding: 0, background: colorBgContainer, flexGrow: 0, textAlign: 'left', alignItems: 'cneter', display: 'flex' }}>

           <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined color="white" /> : <MenuFoldOutlined color="white" />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: buttonWidth,
              height: 64,
            }}
          />
          <div style={{flexGrow: '1', alignItems: 'center', display: 'flex'}}>
            <img src={logo}></img>

          </div>

          <Space direction='horizontal' style={{alignItems: 'center', display: 'flex', marginRight: 24}}>

            <QuestionCircleOutlined />
            <BellOutlined />
            <Title level={5} style={{margin: 'auto'}}>John Browne</Title>
          </Space>

        </Header>

        <Content style={{ margin: '0', overflow: 'initial', flexGrow: 1, height: '100%' }}>
          <div style={{ padding: '0 32px 32px 32px', textAlign: 'center', background: '#f5f5f5', height: '100%' }}>
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

export default AppInterface;
