import { rest } from 'msw';

const mockUserProfile = {
  userId: 'iyu88',
  statusMessage: '상태 메세지가 두 줄 넘으면 Wrap 되면 좋겠네요. 세 줄이 되면 어떻게 되는지 확인할게요.',
  coins: [
    {
      due: 0,
      count: 5,
    },
    {
      due: 1,
      count: 13,
    },
    {
      due: 2,
      count: 9,
    },
  ],
  latestRecord: [
    {
      round: 1,
      rank: 2,
      participantsNum: 5,
    },
    {
      round: 2,
      rank: 1,
      participantsNum: 7,
    },
    {
      round: 3,
      rank: 2,
      participantsNum: 2,
    },
  ],
};

const userProfileApi = [
  rest.get('/api/users/profile', (req, res, ctx) => {
    const userId = req.url.searchParams.get('user');
    if (userId) mockUserProfile.userId = userId;
    return res(ctx.status(200), ctx.json(mockUserProfile));
  }),
];

export default userProfileApi;
