import axios from 'axios';
import { useState } from 'react';
import { QueryFunctionContext, useQuery, useQueryClient } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import UserCommonContainer from '../UserCommonContainer';
import ProblemListItem from '../ProblemListItem';
import SolvedProblem from '../../types/solvedProblem';
import { BASE_URL } from '../../utils/constants/url';
import FullModal from '../FullModal';
import ProblemForm from '../ProblemForm';

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

const ProblemTableHeader = styled.th`
  padding: 0.75rem 0;
  text-align: center;
`;

const ProblemTableCell = styled.td`
  padding: 0.75rem 0;
  text-align: center;
  border-bottom: 1px solid black;
`;

const fetchSolvedProblemList = async ({ queryKey }: QueryFunctionContext) => {
  const userId = queryKey[1];
  try {
    const { data: sovledProblems } = await axios(`${BASE_URL}/problems${userId && `?user=${userId}`}`);
    return sovledProblems.data;
  } catch (err) {
    throw new Error('푼 문제 정보를 불러오는 데 오류가 발생했습니다.');
  }
};

const ProblemList = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');
  const queryClient = useQueryClient();

  const NO_SOLVED_PROBLEMS = '푼 문제가 없습니다? 🤨';

  const { data: solvedProblem } = useQuery<SolvedProblem[]>(['solvedProblem', userId], fetchSolvedProblemList);

  return (
    <UserCommonContainer>
      <ProblemListTitle>
        <h2>푼 문제 목록</h2>
        <NewProblemButton type="button" onClick={() => setShowModal(true)}>
          <AiOutlinePlus size="20" color="white" />
        </NewProblemButton>
      </ProblemListTitle>
      <ProblemListWrapper cellSpacing="0">
        <ProblemListHeader>
          <tr>
            <ProblemTableHeader>플랫폼</ProblemTableHeader>
            <ProblemTableHeader>난이도</ProblemTableHeader>
            <ProblemTableHeader>문제 링크</ProblemTableHeader>
            <ProblemTableHeader>증빙</ProblemTableHeader>
            <ProblemTableHeader>날짜</ProblemTableHeader>
            <ProblemTableHeader>{null}</ProblemTableHeader>
          </tr>
        </ProblemListHeader>
        <tbody>
          {solvedProblem?.length ? (
            solvedProblem.map((p) => (
              <ProblemListItem
                key={p.id}
                id={p.id}
                platformName={p.platformName}
                levelName={p.levelName}
                link={p.link}
                image={p.image}
                createdAt={p.createdAt}
              />
            ))
          ) : (
            <tr>
              <ProblemTableCell colSpan={6}>{NO_SOLVED_PROBLEMS}</ProblemTableCell>
            </tr>
          )}
        </tbody>
      </ProblemListWrapper>
      {showModal && (
        <FullModal close={() => setShowModal(false)}>
          <ProblemForm close={() => setShowModal(false)} />
        </FullModal>
      )}
    </UserCommonContainer>
  );
};

export default ProblemList;
