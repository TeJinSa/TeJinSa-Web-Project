import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const CenteredAlignedMain = styled.main`
  width: 1200px;
  margin: auto;
  padding: 2rem 0;
`;

const BasicLayout = () => {
  return (
    <>
      <Header />
      <CenteredAlignedMain>
        <Outlet />
      </CenteredAlignedMain>
    </>
  );
};

export default BasicLayout;
