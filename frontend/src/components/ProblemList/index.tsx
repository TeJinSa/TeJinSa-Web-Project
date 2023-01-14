import UserCommonContainer from '../UserCommonContainer';
import ProblemListItem from '../ProblemListItem';

const ProblemList = () => {
  return (
    <UserCommonContainer>
      <h1>문제 리스트 목록</h1>
      <ProblemListItem />
    </UserCommonContainer>
  );
};

export default ProblemList;
