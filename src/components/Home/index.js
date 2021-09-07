import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/home';
import { List, Avatar } from 'antd';
import {Redirect} from 'react-router-dom';

const Home = (props) => {
  const {getList, list, user} = props;
  useEffect(() => {
    list.length === 0 && getList();
  }, [user])
  return user ? <div>
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={u => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={u.id}
            description={u.name}
          />
        </List.Item>
      )}
    />
  </div>: <Redirect to={{pathname: '/login', state: {from: '/'}}} />;
};

const mapToState = state => ({
  ...state.home,
  ...state.session
})

// todo：此方法是用来实现异步加载数据
Home.loadData = (store) => {
  // todo：难点 => dispatch 方法的返回值就是派发的 action，最终返回的是 promise
  return store.dispatch(actions.getList());
}
export default connect(mapToState, actions)(Home);