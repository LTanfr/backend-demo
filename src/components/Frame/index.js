import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { adminRoutes } from '../../routes';
import { withRouter } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);

function Frame(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <h1 style={{ color: 'white', fontSize: 30 }} >BACKEND DEMO</h1>
        </div>
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