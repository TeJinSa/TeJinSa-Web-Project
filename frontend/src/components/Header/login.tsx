import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { postLogin } from '../../api/login';
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

const LoginedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Profile = styled.img`
  width: 2rem;
  border-radius: 50%;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  :hover {
    font-weight: 700;
  }
`;

interface User {
  userId: string;
  userProfile: string;
}

const Login = () => {
  const [searchParams] = useSearchParams();
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const getUserData = async () => {
      if (searchParams.has('code')) {
        const data = await postLogin({ code: searchParams.get('code') });
        setUserData(data);
        setIsLogined(true);
      }
    };
    getUserData();
  }, [searchParams]);

  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
    setIsLogined(true);
  };

  return (
    <Container>
      {isLogined ? (
        <LoginedContainer>
          <UserContainer>
            <Profile src={userData?.userProfile} alt="profile" />
            <p>{userData?.userId}</p>
          </UserContainer>
          <LogoutButton onClick={() => setIsLogined(false)}>로그아웃</LogoutButton>
        </LoginedContainer>
      ) : (
        <GithubLoginButton onClick={handleGithubLogin}>
          Github로 로그인하기
          <AiFillGithub size={20} />
        </GithubLoginButton>
      )}
    </Container>
  );
};

export default Login;
