import styled from 'styled-components';
import { useState } from 'react';

interface DropdownDisplay {
  display: boolean;
}

const DropdownWrapper = styled.button`
  position: relative;
  border: none;
  outline: none;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
`;

const DropdownSelect = styled.div<DropdownDisplay>`
  position: absolute;
  width: 3rem;
  padding: 0.5rem;
  border-radius: 20px;
  border: 1px solid lightGrey;
  background-color: white;
  z-index: 999;
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const DropdownOption = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.color ?? 'black'};
`;

const ProblemControlDropdown = ({ displayText }: { displayText: string }) => {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  const toggleDropdownDisplay = () => setDropdownDisplay(() => !dropdownDisplay);

  return (
    <DropdownWrapper type="button" onClick={toggleDropdownDisplay}>
      {displayText}
      <DropdownSelect display={dropdownDisplay}>
        <DropdownOption>수정</DropdownOption>
        <DropdownOption color="red">삭제</DropdownOption>
      </DropdownSelect>
    </DropdownWrapper>
  );
};

export default ProblemControlDropdown;
