import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';
import HeaderContainer from './index.container';
import { GITHUB_CLIENT_ID } from './constants';

const Title = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap');
	font-family: 'Kiwi Maru', serif;
	font-size: 56px;
	color: #ffb03a;
`;
const Logo = styled.div``;
const GithubLoginButton = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;

	padding: 12px 24px;
	background: black;
	border-radius: 8px;
	border: none;

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

const Header = () => {
	return (
		<div>
			<HeaderContainer>
				<Title>TeJinSa</Title>
			</HeaderContainer>
		</div>
	);
};
export default Header;
