import styled from 'styled-components';

const Container = styled.header`
	height: 64px;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div``;
const Right = styled.div``;

interface Props {
	left: JSX.Element;
	right: JSX.Element;
}

const HeaderContainer = ({ left, right }: Props) => {
	return (
		<Container>
			<Left>{left}</Left>
			<Right>{right}</Right>
		</Container>
	);
};

export default HeaderContainer;
