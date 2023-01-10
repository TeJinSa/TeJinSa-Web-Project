import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
	height: 128px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	background: url('https://tetr.io/res/about/about-header.png');
	background-repeat: no-repeat;
	background-size: cover;
`;

interface Props {
	children: JSX.Element | JSX.Element[];
}

const HeaderContainer = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

export default HeaderContainer;
