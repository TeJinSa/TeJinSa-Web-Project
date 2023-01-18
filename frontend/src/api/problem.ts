import axios from 'axios';
import { BASE_URL } from '../utils/constants/url';

interface PostProblemsProps {
  platformName: string;
  levelName: string;
  link: string;
  image: string;
}

interface PostProblemsResponse {
  platformName: '백준';
  levelName: '실버';
  image: '{문제인증firebaseURL}';
  link: '{문제링크}';
  id: '';
}

const problemAPI = {
  postProblems: async (input: PostProblemsProps) => {
    const response: PostProblemsResponse = await axios.post(
      `${BASE_URL}/problems`,
      { ...input },
      { withCredentials: true }
    );
    return response;
  },
};

export default problemAPI;
