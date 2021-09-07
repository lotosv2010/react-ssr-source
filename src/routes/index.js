import Home from '../components/Home';
import Counter from '../components/Counter';
import Layout from '../layout/index';

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [ // 子路由
      {
        path: '/',
        component: Home,
        exact: true,
        key: '/',
        loadData: Home.loadData // 此配置项，代表需要加载异步数据
      },
      {
        path: '/counter',
        component: Counter,
        key: '/counter'
      }
    ]
  }
]

export default routes;