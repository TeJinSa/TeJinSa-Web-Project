import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';
import HeaderContainer from './index.container';

const Logo = styled.div``;
const Login = styled.div``;
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
		<GithubLoginButton onClick={() => setIsLogined(true)}>
			Github로 로그인하기
			<AiFillGithub size={20} />
		</GithubLoginButton>
	);
};

const Header = () => {
	return (
		<div>
			<HeaderContainer>
				<Logo>logo</Logo>
				<User />
			</HeaderContainer>
		</div>
	);
};
export default Header;
