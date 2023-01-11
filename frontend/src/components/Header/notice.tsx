import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Message = styled.div``;

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
