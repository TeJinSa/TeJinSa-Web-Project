import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

// eslint-disable-next-line import/prefer-default-export
export const postLogin = async ({ code }: { code: string | null }) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { code });
  return data;
};
