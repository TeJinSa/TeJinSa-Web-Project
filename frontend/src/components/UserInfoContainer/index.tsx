import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { useQuery } from 'react-query';

const UserInfoWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 30px;
`;

const ProfileImage = styled.img`
  width: 12rem;
  margin: 1rem auto;
  border-radius: 50%;
  border: 2px solid lightgrey;
`;

const UserInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StatusMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StatusMessage = styled.p`
  width: 240px;
  margin: 0;
  border: none;
  word-break: keep-all;
`;

const StatusMessageEditButton = styled.button`
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
`;

const DivideLine = styled.div`
  width: inherit;
  margin: 2rem 0;
  border: 1px solid lightgrey;
`;

const UserInfoContent = styled.span`
  font-size: 1.5rem;
  word-break: break-all;
`;

const RankHighlight = styled.span`
  font-weight: 700;
`;

interface CoinStatus {
  due: number;
  count: number;
}

interface MatchRecord {
  round: number;
  rank: number;
  participantsNum: number;
}

interface UserProfile {
  userId: string;
  statusMessage: string;
  coins: CoinStatus[];
  latestRecord: MatchRecord[];
}

const fetchUserProfile = async (userId: string | null) => {
  if (userId === null) {
    throw new Error('올바른 사용자 아이디가 아닙니다.');
  }
  try {
    const response = await fetch(`/api/users/profile?user=${userId}`);
    const profileJSON = await response.json();
    return profileJSON;
  } catch (err) {
    throw new Error('프로필 정보를 불러오는 데 오류가 발생했습니다.');
  }
};

const UserInfoContainer = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  const NO_COIN_MESSAGE = '테트리스를 할 수 없단다 😩';
  const NO_MATCH_MESSAGE = '참여 좀 하렴 😮‍💨';

  const { data: userProfile } = useQuery<UserProfile>(['userProfile', userId], () => fetchUserProfile(userId));

  const stringifyTotalCoin = (coins: CoinStatus[]) => {
    const DUE_STATUS = ['🔴', '🟡', '🔵'];
    return coins.map((coin) => DUE_STATUS[coin.due].repeat(coin.count)).join('');
  };

  return (
    <UserInfoWrapper>
      <ProfileImage src={`https://github.com/${userProfile?.userId}.png`} alt="사용자 GitHub 프로필 사진" />
      <UserInfoTitle>{userProfile?.userId}</UserInfoTitle>
      <StatusMessageWrapper>
        <StatusMessage>{userProfile?.statusMessage}</StatusMessage>
        <StatusMessageEditButton>
          <AiOutlineEdit size="20" color="white" />
        </StatusMessageEditButton>
      </StatusMessageWrapper>
      <DivideLine />
      <UserInfoTitle>보유 코인 현황</UserInfoTitle>
      <UserInfoContent>
        {userProfile?.coins.length ? stringifyTotalCoin(userProfile?.coins) : <p>{NO_COIN_MESSAGE}</p>}
      </UserInfoContent>
      <DivideLine />
      <UserInfoTitle>최근 전적</UserInfoTitle>
      <UserInfoContent>
        {userProfile?.latestRecord.length ? (
          <ul>
            {userProfile?.latestRecord.map((r) => (
              <li key={r.round}>
                {r.round}회차 ({r.rank === 1 ? <RankHighlight>{r.rank}</RankHighlight> : r.rank}/{r.participantsNum})
              </li>
            ))}
          </ul>
        ) : (
          <p>{NO_MATCH_MESSAGE}</p>
        )}
      </UserInfoContent>
    </UserInfoWrapper>
  );
};

export default UserInfoContainer;
