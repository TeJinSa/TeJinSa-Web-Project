import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import { GITHUB_CLIENT_ID } from './constants';

const Container = styled.div`
  padding: 0 0.75rem;
`;

const GithubLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: black;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0.75rem;

  color: #ffffff;
`;

const User = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);

  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
    setIsLogined(true);
  };

  return isLogined ? (
    <button type="button" onClick={() => setIsLogined(false)}>
      로그아웃
    </button>
  ) : (
    <GithubLoginButton onClick={handleGithubLogin}>
      Github로 로그인하기
      <AiFillGithub size={20} />
    </GithubLoginButton>
  );
};
const Login = () => {
  return (
    <Container>
      <User />
    </Container>
  );
};

export default Login;
