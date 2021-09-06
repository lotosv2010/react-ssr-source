import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/home';
import { List, Avatar } from 'antd';

const Home = (props) => {
  const {getList, list} = props;
  useEffect(() => {
    list.length === 0 && getList();
  }, [])
  return <div>
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
  </div>
};

const mapToState = state => ({
  ...state.home
})

// todo：此方法是用来实现异步加载数据
Home.loadData = (store) => {
  // todo：难点 => dispatch 方法的返回值就是派发的 action，最终返回的是 promise
  return store.dispatch(actions.getList());
}
export default connect(mapToState, actions)(Home);