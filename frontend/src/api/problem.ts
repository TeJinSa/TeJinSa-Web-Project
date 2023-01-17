import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

interface PostProblemsProps {
  platform: string;
  level: string;
  link: string;
  screenshot: string;
}

interface PostProblemsResponse {
  platform: '백준';
  level: '실버';
  image: '{문제인증firebaseURL}';
  link: '{문제링크}';
  id: '';
}

const problemAPI = {
  postProblems: async (input: PostProblemsProps) => {
    const response: PostProblemsResponse = await axios.post(`${BASE_URL}/problems`, { ...input });
    return response;
  },
};

export default problemAPI;
