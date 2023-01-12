import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
	public userService = new UserService();

	public async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			const authCode = req.body.code;

			const accessToken = await this.userService.getGithubAccess(authCode);
			const userData = await this.userService.getGithubUserInfo(accessToken);

			if (userData === undefined) {
				throw new Error('code가 잘못되었습니다.');
			}
		} catch (err) {
			next(err);
		}
	}
}

export default UserController;
