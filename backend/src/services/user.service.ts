import axios from 'axios';

type loginData = {
	userId: string;
	image: string;
};

class UserService {
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
			return result.data.access_token;
		} catch (err) {
			console.error(err);
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
			console.error(err);
		}
	}

	public async createUser(userData: loginData) {}
}

export default UserService;
