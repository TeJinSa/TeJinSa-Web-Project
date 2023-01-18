import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

// interface Login {
//   isSuccess: boolean;
//   code: 200;
//   message: '성공';
//   user: {
//     id: 1;
//     userId: '{github Id}';
//   };
// }

interface PostLogoutResponse {
  isSuccess: true;
  code: 200;
  message: '성공';
}

export const postLogin = async ({ githubCode }: { githubCode: string }) => {
  const { data } = await axios.post(`${BASE_URL}/users/login`, { code: githubCode }, { withCredentials: true });
  return data.user;
};

export const postLogout = async () => {
  const response: PostLogoutResponse = await axios.post(`${BASE_URL}/users/logout`, { withCredentials: true });
  return response;
};
