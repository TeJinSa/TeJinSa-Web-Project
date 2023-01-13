import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { db } from '../ormconfig';
import userRouter from './routes/user';
import problemRouter from './routes/problem';
import session from 'express-session';
import { runSeeders } from 'typeorm-extension';
import { PlatformLevel } from './entities/platformLevel.entity';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await db.initialize();
    console.log('db연결 성공!');

    // truncate안하고 하면 seed데이터가 새로 실행될 때마다 누적됨
    // 그래서 platformLevel - problem relation 삭제하고 truncate 진행
    await db.getRepository(PlatformLevel).clear();

    await runSeeders(db);
    console.log('seed데이터 생성 성공!');
  } catch (err) {
    console.log('db연결실패');
    console.log(err);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 6, // 6 hours
    },
  })
);

app.use('/api/users', userRouter);
app.use('/api/problems', problemRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    isSuccess: false,
    code: err.status,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
