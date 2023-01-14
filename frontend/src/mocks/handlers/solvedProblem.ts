import { rest } from 'msw';

const mockSolvedProblem = [
  {
    id: '1',
    userId: 'iyu88',
    platform: '백준',
    level: '다이아몬드',
    link: 'https://www.acmicpc.net/problem/1655',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '2',
    userId: 'iyu88',
    platform: '프로그래머스',
    level: 'level 3',
    link: 'https://school.programmers.co.kr/learn...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '3',
    userId: 'iyu88',
    platform: '해커랭크',
    level: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '4',
    userId: 'iyu88',
    platform: '해커랭크',
    level: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '5',
    userId: 'caseBread',
    platform: '프로그래머스',
    level: 'level 3',
    link: 'https://school.programmers.co.kr/learn...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '6',
    userId: 'caseBread',
    platform: '해커랭크',
    level: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
  {
    id: '7',
    userId: 'caseBread',
    platform: '해커랭크',
    level: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    date: '2023/01/10',
  },
];

const solvedProblemApi = [
  rest.get('/api/problems', (req, res, ctx) => {
    const userId = req.url.searchParams.get('user');
    if (userId) {
      const userSolvedProblem = Object.values(mockSolvedProblem).filter((p) => p.userId === userId);
      return res(ctx.status(200), ctx.json(userSolvedProblem));
    }
    return res(ctx.status(200), ctx.json(mockSolvedProblem));
  }),
];

export default solvedProblemApi;
