import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import { GITHUB_CLIENT_ID } from './constants';

const Container = styled.div`
	padding: 0 12px;
`;

const GithubLoginButton = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;

	background: black;
	border-radius: 8px;
	border: none;
	padding: 6px 12px;

	color: #ffffff;
`;

const User = () => {
	const [isLogined, setIsLogined] = useState<boolean>(false);

	return isLogined ? (
		<button type="button" onClick={() => setIsLogined(false)}>
			로그아웃
		</button>
	) : (
		<a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`}>
			<GithubLoginButton onClick={() => setIsLogined(true)}>
				Github로 로그인하기
				<AiFillGithub size={20} />
			</GithubLoginButton>
		</a>
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
