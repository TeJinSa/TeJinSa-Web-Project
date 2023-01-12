import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { postLogin, postLogout } from '../../api/login';
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

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const githubCode = searchParams.get('code');
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const { data: userData, mutate } = useMutation(postLogin);

  useEffect(() => {
    const getUserData = async () => {
      if (githubCode !== null) {
        mutate(
          { code: githubCode },
          {
            onSuccess: () => {
              setIsLogined(true);
              searchParams.delete('code');
              setSearchParams(searchParams);
            },
          }
        );
      }
    };
    getUserData();

    // useEffect의 누락된 속성을 알려주는 규칙인데 mount시의 useEffect사용이 막히더라구요.. 이 규칙은 뺄까요?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
    setIsLogined(true);
  };

  const handleLogout = async () => {
    const data = await postLogout();
    if (data.isSuccess) {
      alert('로그아웃 되었습니다.');
      window.location.href = '/';
      setIsLogined(false);
    }
  };

  return (
    <Container>
      {isLogined ? (
        <LoginedContainer>
          <UserContainer>
            <Profile src={userData.userProfile} alt="profile" />
            <p>{userData.userId}</p>
          </UserContainer>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
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
