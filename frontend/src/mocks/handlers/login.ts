import { rest } from 'msw';

const mockUserData = {
  isSuccess: true,
  code: 200,
  message: '성공',
  userData: {
    id: '1',
    userId: 'tempUserId',
  },
};

const mockLogoutData = {
  isSuccess: true,
  code: 200,
  message: '성공',
};

export default [
  rest.post('/api/users/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserData));
  }),
  rest.post('/api/users/logout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLogoutData));
  }),
];
