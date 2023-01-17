import styled from 'styled-components';
import React, { useState } from 'react';

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

const ProblemControlDropdown = ({ displayText }: { displayText: string }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDropdownDisplay = () => setIsDisplayed(() => !isDisplayed);

  const testHandleDropdownOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedOption = e.target as HTMLButtonElement;
    if (clickedOption.value === 'edit') {
      window.alert('푼 문제 정보를 수정하는 Modal 이 뜹니다.');
    } else {
      window.alert('푼 문제 정보 삭제를 확인하는 Modal 이 뜹니다.');
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
