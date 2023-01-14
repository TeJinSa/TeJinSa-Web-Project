import styled from 'styled-components';
import SolvedProblem from '../../types/solvedProblem';

const ProblemItemWrapper = styled.tr`
  td:first-of-type {
    padding-left: 1rem;
  }

  td:last-of-type {
    padding-right: 1rem;
  }
`;

const ProblemAttribute = styled.td`
  padding: 0.75rem 0;
  text-align: center;
  border-bottom: 1px solid black;
`;

const ProblemCommonButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ProblemImageButton = styled(ProblemCommonButton)`
  padding: 0.375rem 1rem;
  border-radius: 10px;
  color: white;
  background-color: #745aa8;
`;

const ProblemListItem = ({ platform, level, link, image, date }: SolvedProblem) => {
  return (
    <ProblemItemWrapper>
      <ProblemAttribute>{platform}</ProblemAttribute>
      <ProblemAttribute>{level}</ProblemAttribute>
      <ProblemAttribute>{link}</ProblemAttribute>
      <ProblemAttribute>
        <ProblemImageButton type="button">사진 보기</ProblemImageButton>
      </ProblemAttribute>
      <ProblemAttribute>{date}</ProblemAttribute>
      <ProblemAttribute>
        <ProblemCommonButton type="button">···</ProblemCommonButton>
      </ProblemAttribute>
    </ProblemItemWrapper>
  );
};

export default ProblemListItem;
