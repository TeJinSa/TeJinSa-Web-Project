import rankingApi from './ranking';
import loginApi from './login';
import userProfileApi from './userProfile';

const handlers = [...rankingApi, ...loginApi, ...userProfileApi];

export default handlers;
