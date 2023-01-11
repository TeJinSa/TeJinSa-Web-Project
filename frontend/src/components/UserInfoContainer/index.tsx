import styled from 'styled-components';

const UserInfoWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: white;
	border-radius: 30px;
`;

const UserProfileImage = styled.img`
	width: 12rem;
	margin: 1rem auto;
	border-radius: 50%;
	border: 2px solid lightgrey;
`;

const UserProfileTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
`;

const UserProfileMessageWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const UserProfileMessage = styled.p`
	border: none;
`;

const UserProfileEditButton = styled.button`
	width: 2rem;
	height: 2rem;
	outline: none;
	border: none;
	border-radius: 10px;
	background-color: black;
	cursor: pointer;
`;

const HorizontalLine = styled.div`
	width: inherit;
	border: 1px solid lightgrey;
`;

interface CoinStatus {
	due: number;
	count: number;
}

const tempCoin = [
	{
		due: 0,
		count: 1,
	},
	{
		due: 1,
		count: 2,
	},
	{
		due: 2,
		count: 4,
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
			<UserProfileImage src="https://github.com/iyu88.png" alt="사용자 GitHub 프로필 사진" />
			<UserProfileTitle>iyu88</UserProfileTitle>
			<UserProfileMessageWrapper>
				<UserProfileMessage>상태 메세지가 두 줄 넘으면 Wrap 되면 좋겠네요.</UserProfileMessage>
				<UserProfileEditButton>ㅇ</UserProfileEditButton>
			</UserProfileMessageWrapper>
			<HorizontalLine />
			<UserProfileTitle>보유 코인 현황</UserProfileTitle>
			{stringifyTotalCoin(tempCoin)}
			<HorizontalLine />
			<UserProfileTitle>최근 전적</UserProfileTitle>
			{latestRecord.length ? (
				<ul>
					{latestRecord.map((r) => (
						<li key={r.round}>
							{r.round}회차 ({r.rank}/{r.participantsNum})
						</li>
					))}
				</ul>
			) : (
				<p>참여 좀 하렴 😮‍💨</p>
			)}
		</UserInfoWrapper>
	);
};

export default UserInfoContainer;
