import styled from 'styled-components';
import Notice from './notice';
import Login from './login';
import HeaderImg from '../../assets/header.png';

const HeaderContainer = styled.header`
  height: 156px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  font-family: 'Gemunu Libre', sans-serif;
  font-size: 56px;
  color: #ffb03a;
`;

const HeaderBar = styled.div`
  // 공지 bar 위치조정 어떻게?
  position: relative;
  top: 10px;
  max-height: 50px;
  width: 60%;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Title>TeJinSa</Title>
        <HeaderBar>
          <Notice message="추가예정" />
          <Login />
        </HeaderBar>
      </HeaderContainer>
    </div>
  );
};
export default Header;
