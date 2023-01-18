import styled from 'styled-components';
import SolvedProblem from '../../types/solvedProblem';
import ProblemControlDropdown from '../ProblemControlDropdown';

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

const ProblemListItem = ({ id, platformName, levelName, link, image, createdAt }: SolvedProblem) => {
  const testOpenProofImageModal = () => {
    window.alert(`다음 이미지를 표시하는 Modal 이 뜹니다. ${image}`);
  };

  return (
    <ProblemItemWrapper>
      <ProblemAttribute>{platformName}</ProblemAttribute>
      <ProblemAttribute>{levelName}</ProblemAttribute>
      <ProblemAttribute>{link}</ProblemAttribute>
      <ProblemAttribute>
        <ProblemImageButton type="button" onClick={testOpenProofImageModal}>
          사진 보기
        </ProblemImageButton>
      </ProblemAttribute>
      <ProblemAttribute>{createdAt?.slice(0, 10)}</ProblemAttribute>
      <ProblemAttribute>
        <ProblemControlDropdown displayText="···" id={id} />
      </ProblemAttribute>
    </ProblemItemWrapper>
  );
};

export default ProblemListItem;
