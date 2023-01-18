import { useContext, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { redirect, useSearchParams } from 'react-router-dom';
import { postLogin, postLogout } from '../../api/login';
import UserContext from '../../context/user';
import { GITHUB_CLIENT_ID } from './constants';

const Login = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const githubCode = searchParams.get('code');
  const { mutate: loginMutate } = useMutation(postLogin);
  const { mutate: logoutMutate, isSuccess: isLogoutSuccess } = useMutation(postLogout);

  useEffect(() => {
    const getUserData = async () => {
      if (githubCode !== null) {
        loginMutate(
          { githubCode },
          {
            onSuccess: (user) => {
              userDispatch({ type: 'LOGIN', value: user.userId });

              searchParams.delete('code');
              setSearchParams(searchParams);
            },
          }
        );
      }
    };
    getUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
  };

  const handleLogout = () => {
    // TODO : logoutAPI 통신이 성공했을 때만 로그아웃 처리해주기
    logoutMutate();
    userDispatch({ type: 'LOGOUT' });
    alert('로그아웃 되었습니다.');
    redirect('/');
  };

  return (
    <div className="py-0 px-3">
      {userState.isLogined ? (
        <div className="flex items-center gap-4">
          <a href={`/user?id=${userState.userId}`} className="flex items-center gap-2">
            <img className="w-8 rounded-full" src={`https://github.com/${userState.userId}.png`} alt="profile" />
            <p>{userState.userId}</p>
          </a>
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
