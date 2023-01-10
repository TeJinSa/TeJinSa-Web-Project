import { rest } from 'msw';

const mockRanking = [
	{
		userId: 'iyu88',
		medals: {
			gold: 0,
			silver: 4,
			bronze: 0,
		},
	},
];

const rankingApi = [
	rest.get('/ranking', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockRanking));
	}),
];

export default rankingApi;
