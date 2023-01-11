import rankingApi from './ranking';
import loginApi from './login';

const handlers = [...rankingApi, ...loginApi];

export default handlers;
