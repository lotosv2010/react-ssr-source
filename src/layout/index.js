import React, {useLayoutEffect} from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';
import actions from '../redux/actions/session';
import styles from './index.css';

const { Header, Content } = Layout;

const BaseLayout = (props) => {
  const {route: {routes}, user, logout, history, location: {pathname}, staticContext} = props;

  const handleClick = async () => {
    user && await logout();
    history.push({pathname: '/login', state: {from: '/'}})
  }

  useLayoutEffect(() => {
    if(props.staticContext) {
      // styles._get 获取处理后的css源码
      props.staticContext.csses.push(styles._get());
    }
  }, [])

  return (
    <Layout className="layout">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{float: 'left', width: 120, height: 31, margin: '16px 24px 16px 0', background: 'rgba(255, 255, 255, 0.2)'}} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]} selectedKeys={[pathname]} style={{flex: 1}}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/counter" icon={<VideoCameraOutlined />}>
              <Link to="/counter">计数器</Link>
            </Menu.Item>
          </Menu>
          <div style={{float: 'right', cursor: 'pointer'}}>
            {user?.username?<Avatar className="avatar_username" size={40} onClick={handleClick}>{user?.username}</Avatar>:null}
          </div>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, height: 'calc(100vh - 64px)'}}>
          {renderRoutes(routes)}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapToState = state => ({
  ...state.session
})

// todo
BaseLayout.loadData = (store) => {
  return store.dispatch(actions.getInfo());
}

export default connect(mapToState, actions)(BaseLayout);