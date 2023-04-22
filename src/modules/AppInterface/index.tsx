import React, { FC, ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { MenuProps, Space } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Button from 'antd/lib/button';
import { ReactComponent as FullLogo } from './images/fullLogo.svg';
import { ReactComponent as CollapsedLogo } from './images/collapsedLogo.svg';
import { Link } from 'react-router-dom';
import UserCard from "../UserCard";
import CompanyCard from "../CompanyCard";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {icon: HomeOutlined, label: 'Все заказы', link: '/orders'},
  {icon: UnorderedListOutlined, label: 'Отклики', link: '/responses'},
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
        <div style={{padding: '5px'}}>
          {collapsed ? <CollapsedLogo/> : <FullLogo/>}
        </div>

        <CompanyCard name="ООО Перспектива" collapsed={collapsed} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} style={{marginTop: '25px'}} />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: contentMargin, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header
          style={{ padding: '0 5px', background: colorBgContainer, flexGrow: 0, textAlign: 'left', display: 'flex', justifyContent: "space-between" }}
        >
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

          <Space
            direction='horizontal'
            style={{
              marginRight: 20
            }}
          >
            <Button
              type="text"
              icon={<BellOutlined/>}
              style={{
                fontSize: '16px',
                width: 48,
                height: 48,
              }}
            />
            <UserCard name="Danya"/>
          </Space>
        </Header>

        <Content style={{ margin: '0', overflow: 'initial', flexGrow: 1, height: '100%' }}>
          <div style={{ padding: '0', textAlign: 'center', background: '#f5f5f5', height: '100%' }}>
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', flexGrow: 0 }}>
          © 2023 СКЗМК, Все права защищены.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppInterface;
