import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

interface PostProblemsProps {
  platform: string;
  level: string;
  link: string;
  screenshot: string;
}

// eslint-disable-next-line import/prefer-default-export
export const problemAPI = {
  postProblems: async (input: PostProblemsProps) => {
    const { data } = await axios.post(`${BASE_URL}/problems`, { ...input });
    return data;
  },
};
