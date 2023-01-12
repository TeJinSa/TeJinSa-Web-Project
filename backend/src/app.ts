import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { db } from '../ormconfig';
import userRouter from './routes/user';
import session from 'express-session';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

db.initialize()
	.then(() => {
		console.log('db 연결');
	})
	.catch((err) => {
		console.log(err);
	});

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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(err.status || 500);
	res.json({ message: err.message });
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
