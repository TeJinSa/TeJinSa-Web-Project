import rankingApi from './ranking';
import loginApi from './login';
import userProfileApi from './userProfile';
import solvedProblemApi from './solvedProblem';


const handlers = [...rankingApi, ...userProfileApi, ...solvedProblemApi, ...loginApi];

export default handlers;
