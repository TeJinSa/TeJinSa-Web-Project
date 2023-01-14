import styled from 'styled-components';
import UserInfoContainer from '../components/UserInfoContainer';
import ProblemList from '../components/ProblemList';

const UserHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.375rem;
`;

const UserHistoryWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const UserHome = () => {
  return (
    <UserHomeWrapper>
      <UserInfoContainer />
      <UserHistoryWrapper>
        <ProblemList />
      </UserHistoryWrapper>
    </UserHomeWrapper>
  );
};
export default UserHome;
