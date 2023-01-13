interface Props {
  message: string;
}

const Notice = ({ message }: Props) => {
  return (
    <div className="flex items-center gap-3 py-3 px-4">
      <div className="font-semibold">📣 공지사항</div>
      <div className="text-base">{message}</div>
    </div>
  );
};

export default Notice;
