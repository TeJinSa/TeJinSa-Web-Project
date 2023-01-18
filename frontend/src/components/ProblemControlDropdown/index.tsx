import axios from 'axios';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { BASE_URL } from '../../utils/constants/url';

interface DropdownDisplay {
  isDisplayed: boolean;
}

const DropdownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
`;

const DropdownSelect = styled.div<DropdownDisplay>`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isDisplayed ? 'block' : 'none')};
`;

const DropdownOption = styled.button`
  width: 3.5rem;
  padding: 0.5rem;
  border: 1px solid lightGrey;
  background-color: white;
  color: ${(props) => props.color ?? 'black'};
`;

const fetchDeleteProblem = async (problemID: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/problems/${problemID}`, { withCredentials: true });
    return response;
  } catch (err) {
    throw new Error('푼 문제 정보를 삭제하는 데 오류가 발생했습니다.');
  }
};

const ProblemControlDropdown = ({ displayText, id }: { displayText: string; id: string }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { mutate: deleteProblemMutate } = useMutation(fetchDeleteProblem);

  const toggleDropdownDisplay = () => setIsDisplayed(() => !isDisplayed);

  const testHandleDropdownOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedOption = e.target as HTMLButtonElement;
    if (clickedOption.value === 'edit') {
      window.alert('푼 문제 정보를 수정하는 Modal 이 뜹니다.');
    } else {
      const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
      if (confirmDelete) deleteProblemMutate(id);
    }
  };

  return (
    <DropdownWrapper onClick={toggleDropdownDisplay}>
      {displayText}
      <DropdownSelect isDisplayed={isDisplayed} onClick={testHandleDropdownOption}>
        <DropdownOption value="edit">수정</DropdownOption>
        <DropdownOption value="delete" color="red">
          삭제
        </DropdownOption>
      </DropdownSelect>
    </DropdownWrapper>
  );
};

export default ProblemControlDropdown;
