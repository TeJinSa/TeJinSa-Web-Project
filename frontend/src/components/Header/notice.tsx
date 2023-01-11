import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Message = styled.div`
  font-size: 0.9rem;
`;

interface Props {
  message: string;
}

const Notice = ({ message }: Props) => {
  return (
    <Container>
      <Title>📣 공지사항</Title>
      <Message>{message}</Message>
    </Container>
  );
};

export default Notice;
