import { useCallback, useEffect } from 'react';
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
  const isLogined = localStorage.getItem('isLogined') === 'true';
  const { mutate: loginMutate } = useMutation(postLogin);
  const { mutate: logoutMutate, isSuccess: isLogoutSuccess } = useMutation(postLogout);

  useEffect(() => {
    const getUserData = async () => {
      if (githubCode !== null) {
        loginMutate(
          { githubCode },
          {
            onSuccess: (userData) => {
              localStorage.setItem('isLogined', 'true');
              localStorage.setItem('id', userData.userId);

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
    localStorage.setItem('isLogined', 'false');
  };

  const handleLogout = async () => {
    logoutMutate();
    if (isLogoutSuccess) {
      alert('로그아웃 되었습니다.');
      localStorage.removeItem('id');
      localStorage.setItem('isLogined', 'false');
      window.location.href = '/';
    }
  };

  const getUserId = useCallback(() => {
    return localStorage.getItem('id');
  }, []);

  return (
    <Container>
      {isLogined ? (
        <LoginedContainer>
          <UserContainer>
            <Profile src={`https://github.com/${getUserId()}.png`} alt="profile" />
            <p>{getUserId()}</p>
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
