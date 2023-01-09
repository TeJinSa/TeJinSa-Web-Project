import { rest } from 'msw';

const mock_ranking = [{
  userId: 'iyu88',
  medals: {
    gold: 0,
    silver: 4,
    bronze: 0,
  }
}];

export const handlers = [
  rest.get('/ranking', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mock_ranking));
  }),
]
