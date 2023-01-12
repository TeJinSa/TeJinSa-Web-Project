import axios from 'axios';
import { BadRequestException } from '../error/httpException';
import UserModel from '../models/user.model';

export type loginData = {
  userId: string;
  image: string;
};

class UserService {
  userModel = new UserModel();

  public async getGithubAccess(code: string) {
    try {
      const result = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRETS,
          code,
        },
        {
          headers: {
            accept: 'application/json',
          },
        }
      );

      if (result.data.access_token === undefined) {
        throw new BadRequestException('code가 잘못되었습니다.');
      }

      return result.data.access_token;
    } catch (err) {
      throw err;
    }
  }

  public async getGithubUserInfo(accessToken: string) {
    try {
      const result = await axios.get('https://api.github.com/user', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      });

      return { userId: result.data.login, image: result.data.avatar_url };
    } catch (err) {
      throw err;
    }
  }

  public async createUser(userData: loginData) {
    try {
      const res = await this.userModel.findUser(userData.userId);

      if (res === null) {
        return await this.userModel.createUser(userData);
      }

      return res;
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
