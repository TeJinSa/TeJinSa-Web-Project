import rankingApi from './ranking';
import userProfileApi from './userProfile';

const handlers = [...rankingApi, ...userProfileApi];

export default handlers;
