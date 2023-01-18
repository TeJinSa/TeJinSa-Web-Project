import { rest } from 'msw';
import SolvedProblem from '../../types/solvedProblem';

const mockSolvedProblem: SolvedProblem[] = [
  {
    id: '1',
    userId: 'iyu88',
    platformName: '백준',
    levelName: '다이아몬드',
    link: 'https://www.acmicpc.net/problem/1655',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '2',
    userId: 'iyu88',
    platformName: '프로그래머스',
    levelName: 'levelName 3',
    link: 'https://school.programmers.co.kr/learn...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '3',
    userId: 'iyu88',
    platformName: '해커랭크',
    levelName: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '4',
    userId: 'iyu88',
    platformName: '해커랭크',
    levelName: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '5',
    userId: 'caseBread',
    platformName: '프로그래머스',
    levelName: 'levelName 3',
    link: 'https://school.programmers.co.kr/learn...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '6',
    userId: 'caseBread',
    platformName: '해커랭크',
    levelName: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
  },
  {
    id: '7',
    userId: 'caseBread',
    platformName: '해커랭크',
    levelName: 'Medium',
    link: 'https://www.hackerrank.com/challenge...',
    image: 'https://picsum.photos/200',
    createdAt: '2023/01/10',
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
  rest.post('/api/problems', async (req, res, ctx) => {
    const problemDeatils = await req.json();
    mockSolvedProblem.push(problemDeatils);
    return res(ctx.status(200), ctx.json({ message: '성공적으로 추가되었습니다.' }));
  }),
];

export default solvedProblemApi;
