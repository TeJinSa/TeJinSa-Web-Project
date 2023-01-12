import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

export const postLogin = async ({ code }: { code: string }) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { code });
  return data;
};

export const postLogout = async () => {
  const { data } = await axios.post(`${BASE_URL}/logout`);
  return data;
};
