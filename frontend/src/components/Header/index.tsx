import styled from 'styled-components';
import Notice from './notice';
import Login from './login';
import HeaderImg from '../../assets/header.png';

const HeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 9.75rem;
  padding: 0 2rem;

  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  font-family: 'Gemunu Libre', sans-serif;
  font-size: 5rem;
  color: #ffb03a;
`;

const HeaderBar = styled.div`
  height: 3rem;
  width: 60%;

  border-radius: 0.5rem;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>TeJinSa</Title>
      <HeaderBar>
        <Notice message="추가예정" />
        <Login />
      </HeaderBar>
    </HeaderContainer>
  );
};
export default Header;
