import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import routes from "../routes";

const { Header, Content } = Layout;

export default class extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
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
            {routes.map(route => (<Route {...route} />))}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
