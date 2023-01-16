import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

export const postLogin = async ({ githubCode }: { githubCode: string }) => {
  const { data } = await axios.post(`${BASE_URL}/users/login`, { githubCode });
  return data;
};

export const postLogout = async () => {
  const { data } = await axios.post(`${BASE_URL}/users/logout`);
  return data;
};
