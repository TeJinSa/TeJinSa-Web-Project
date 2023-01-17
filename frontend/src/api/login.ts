import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

interface PostLoginResponse {
  isSuccess: boolean;
  code: 200;
  message: '성공';
  userData: {
    id: 1;
    userId: '{github Id}';
  };
}

export const postLogin = async ({ githubCode }: { githubCode: string }) => {
  const { userData }: PostLoginResponse = await axios.post(`${BASE_URL}/users/login`, { githubCode });
  return userData;
};

export const postLogout = async () => {
  const { data } = await axios.post(`${BASE_URL}/users/logout`);
  return data;
};
