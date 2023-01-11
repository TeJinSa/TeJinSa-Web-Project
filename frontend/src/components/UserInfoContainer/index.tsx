import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

const UserInfoContainer = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  const stringifyTotalCoin = (coins: CoinStatus[]) => {
    const dueStatus = ['🔴', '🟡', '🔵'];
    return coins.map((coin) => dueStatus[coin.due].repeat(coin.count)).join('');
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/profile?user=${userId}`);
        const profileJSON = await response.json();
        setUserProfile(profileJSON);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserProfile();
  }, [userId]);

  return (
    <UserInfoWrapper>
      <ProfileImage src={`https://github.com/${userProfile?.userId}.png`} alt="사용자 GitHub 프로필 사진" />
      <UserInfoTitle>{userProfile?.userId}</UserInfoTitle>
      <ProfileMessageWrapper>
        <ProfileMessage>{userProfile?.statusMessage}</ProfileMessage>
        <ProfileMessageEditButton>
          <AiOutlineEdit size="20" color="white" />
        </ProfileMessageEditButton>
      </ProfileMessageWrapper>
      <DivideLine />
      <UserInfoTitle>보유 코인 현황</UserInfoTitle>
      <UserInfoContent>
        {userProfile?.coins.length ? stringifyTotalCoin(userProfile?.coins) : <p>테트리스를 할 수 없단다 😩</p>}
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
          <p>참여 좀 하렴 😮‍💨</p>
        )}
      </UserInfoContent>
    </UserInfoWrapper>
  );
};

export default UserInfoContainer;
