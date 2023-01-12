import styled from 'styled-components';
import UserInfoContainer from '../components/UserInfoContainer';

const UserHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserCommonContainer = styled.div`
  flex: 3;
`;

const UserHome = () => {
  return (
    <UserHomeWrapper>
      <UserInfoContainer />
      <UserCommonContainer />
    </UserHomeWrapper>
  );
};
export default UserHome;
