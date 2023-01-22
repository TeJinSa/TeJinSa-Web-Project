import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const CenteredAlignedMain = styled.main`
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  max-width: 1200px;
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
