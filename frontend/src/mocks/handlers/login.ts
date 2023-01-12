import { rest } from 'msw';

const mockUserData = {
  userId: 'tempUserId',
  userProfile: 'https://avatars.githubusercontent.com/u/92029332?v=4',
};

const mockLogoutData = {
  isSuccess: true,
  code: 200,
  message: '성공',
};

export default [
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserData));
  }),
  rest.post('/api/logout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLogoutData));
  }),
];
