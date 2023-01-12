import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../error/httpException';
import UserService from '../services/user.service';

class UserController {
	public userService = new UserService();

	public async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			const authCode = req.body.code;

			const accessToken = await this.userService.getGithubAccess(authCode);
			const userData = await this.userService.getGithubUserInfo(accessToken);

			if (userData === undefined) {
				throw new BadRequestException('accessToken이 잘못되었습니다.');
			}

			const user = await this.userService.createUser(userData);

			const session: any = req.session;
			session.userGithubId = user.userId;
			session.userId = user.id;

			res.status(200).json(user);
		} catch (err) {
			next(err);
		}
	}
}

export default UserController;
