import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {renderRoutes} from 'react-router-config';

const { Header, Content } = Layout;

const BaseLayout = (props) => {
  const {route: {routes}} = props
  return (
    <Layout>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div style={{float: 'left', width: 120, height: 31, margin: '16px 24px 16px 0', background: 'rgba(255, 255, 255, 0.2)'}} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/counter">counter</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, height: 'calc(100vh - 64px)'}}>
          {renderRoutes(routes)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;