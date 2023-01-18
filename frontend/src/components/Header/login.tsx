import { useCallback, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { postLogin, postLogout } from '../../api/login';
import { GITHUB_CLIENT_ID } from './constants';

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
            onSuccess: (user) => {
              localStorage.setItem('isLogined', 'true');
              localStorage.setItem('userId', user.userId);
              localStorage.setItem('id', user.id);

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
    localStorage.setItem('isLogined', 'false');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
  };

  const handleLogout = () => {
    logoutMutate();
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('userId');
    localStorage.removeItem('id');
    localStorage.setItem('isLogined', 'false');
    window.location.href = '/';
  };

  const getUserId = useCallback(() => {
    return localStorage.getItem('userId');
  }, []);

  return (
    <div className="py-0 px-3">
      {isLogined ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img className="w-8 rounded-full" src={`https://github.com/${getUserId()}.png`} alt="profile" />
            <p>{getUserId()}</p>
          </div>
          <button type="button" className="border-none bg-none hover:underline" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border-none bg-black py-2 px-3 text-white"
          onClick={handleGithubLogin}
        >
          Github로 로그인하기
          <AiFillGithub size={20} />
        </button>
      )}
    </div>
  );
};

export default Login;
