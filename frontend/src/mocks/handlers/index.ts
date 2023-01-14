import rankingApi from './ranking';
import userProfileApi from './userProfile';
import solvedProblemApi from './solvedProblem';

const handlers = [...rankingApi, ...userProfileApi, ...solvedProblemApi];

export default handlers;
