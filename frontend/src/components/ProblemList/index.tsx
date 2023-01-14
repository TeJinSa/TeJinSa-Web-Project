import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import UserCommonContainer from '../UserCommonContainer';

const ProblemListWrapper = styled.table`
  width: 100%;
`;

const ProblemListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewProblemButton = styled.button`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
`;

const ProblemListHeader = styled.thead`
  background-color: lightGrey;
  th:first-of-type {
    border-top-left-radius: 10px;
    padding-left: 1rem;
  }

  th:last-of-type {
    border-top-right-radius: 10px;
    padding-right: 1rem;
  }
`;

const ProblemAttribute = styled.th`
  padding: 0.75rem 0;
  text-align: center;
`;

const ProblemList = () => {
  return (
    <UserCommonContainer>
      <ProblemListTitle>
        <h2>푼 문제 목록</h2>
        <NewProblemButton>
          <AiOutlinePlus size="20" color="white" />
        </NewProblemButton>
      </ProblemListTitle>
      <ProblemListWrapper cellSpacing="0">
        <ProblemListHeader>
          <ProblemAttribute>플랫폼</ProblemAttribute>
          <ProblemAttribute>난이도</ProblemAttribute>
          <ProblemAttribute>문제 링크</ProblemAttribute>
          <ProblemAttribute>증빙</ProblemAttribute>
          <ProblemAttribute>날짜</ProblemAttribute>
          <ProblemAttribute>{null}</ProblemAttribute>
        </ProblemListHeader>
        <tbody />
      </ProblemListWrapper>
    </UserCommonContainer>
  );
};

export default ProblemList;
