import axios from 'axios';

export default (ctx) => axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    cookie: ctx.cookies.get('koa.sess') || ''
  }
});