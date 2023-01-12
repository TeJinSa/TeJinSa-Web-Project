import rankingApi from './ranking';
import loginApi from './login';
import userProfileApi from './userProfile';

const handlers = [...rankingApi, ...userProfileApi, ...loginApi];

export default handlers;
