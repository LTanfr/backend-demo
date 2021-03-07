import React from 'react';
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import { adminRoutes } from '../../routes';
import { withRouter } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { clearToken } from '../../utils/auth';
import './Frame.css';

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);

function Frame(props) {

  const popMenu = (
    <Menu onClick={(e) => {
      if(e.key === 'logout') {
        clearToken();
        props.history.push('/login');
      } else {
        message.info(e.key);
      }
    }}>
      <Menu.Item key="notification">通知</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logout">退出</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <h1 style={{ color: 'white', fontSize: 30 }} >BACKEND DEMO</h1>
        </div>
        <Dropdown
          className="header-dropdown"
          overlay={popMenu}
          placement="bottomCenter"
        >
          <div>
            <Avatar
              className="header-dropdown-avatar"
              size={32}
            >U</Avatar>
            <span>管理员</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              routes.map(route => {
                return (
                  <Menu.Item
                    key={route.path}
                    icon={route.icon}
                    onClick={p => props.history.push(p.key)}
                  >
                    {route.title}
                  </Menu.Item>)
              })
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Frame);