import styled from 'styled-components';

const Container = styled.header`
	height: 64px;
`;

interface props {
	children: JSX.Element[] | JSX.Element;
}

const HeaderContainer = ({ children }: props) => {
	return <Container>{children}</Container>;
};

export default HeaderContainer;
