interface SolvedProblem {
  platform: string;
  level: string;
  link: string;
  image: string;
  date: string;
}

const ProblemListItem = ({ platform, level, link, image, date }: SolvedProblem) => {
  return (
    <tr>
      <td>{platform}</td>
      <td>{level}</td>
      <td>{link}</td>
      <td>
        <button type="button">사진 보기</button>
      </td>
      <td>{date}</td>
      <td>···</td>
    </tr>
  );
};

export default ProblemListItem;
