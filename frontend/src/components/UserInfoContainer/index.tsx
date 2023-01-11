import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';

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

const ProfileMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProfileMessage = styled.p`
  width: 240px;
  margin: 0;
  border: none;
  word-break: keep-all;
`;

const ProfileMessageEditButton = styled.button`
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

const tempCoin = [
  {
    due: 0,
    count: 5,
  },
  {
    due: 1,
    count: 13,
  },
  {
    due: 2,
    count: 9,
  },
];

const latestRecord = [
  {
    round: 1,
    rank: 2,
    participantsNum: 5,
  },
  {
    round: 2,
    rank: 1,
    participantsNum: 7,
  },
  {
    round: 3,
    rank: 2,
    participantsNum: 2,
  },
];

const UserInfoContainer = () => {
  const stringifyTotalCoin = (coins: CoinStatus[]) => {
    const dueStatus = ['🔴', '🟡', '🔵'];
    return coins.map((coin) => dueStatus[coin.due].repeat(coin.count)).join('');
  };

  return (
    <UserInfoWrapper>
      <ProfileImage src="https://github.com/iyu88.png" alt="사용자 GitHub 프로필 사진" />
      <UserInfoTitle>iyu88</UserInfoTitle>
      <ProfileMessageWrapper>
        <ProfileMessage>
          상태 메세지가 두 줄 넘으면 Wrap 되면 좋겠네요. 세 줄이 되면 어떻게 되는지 확인할게요.{' '}
        </ProfileMessage>
        <ProfileMessageEditButton>
          <AiOutlineEdit size="20" color="white" />
        </ProfileMessageEditButton>
      </ProfileMessageWrapper>
      <DivideLine />
      <UserInfoTitle>보유 코인 현황</UserInfoTitle>
      <UserInfoContent>{stringifyTotalCoin(tempCoin)}</UserInfoContent>
      <DivideLine />
      <UserInfoTitle>최근 전적</UserInfoTitle>
      <UserInfoContent>
        {latestRecord.length ? (
          <ul>
            {latestRecord.map((r) => (
              <li key={r.round}>
                {r.round}회차 ({r.rank === 1 ? <RankHighlight>{r.rank}</RankHighlight> : r.rank}/{r.participantsNum})
              </li>
            ))}
          </ul>
        ) : (
          <p>참여 좀 하렴 😮‍💨</p>
        )}
      </UserInfoContent>
    </UserInfoWrapper>
  );
};

export default UserInfoContainer;
