import { useEffect, useState } from 'react';

/* TODO : 이거 분리하기, Platform도 Object로 뽑아놓기 */
const levelList = {
  백준: ['골드', '실버', '브론즈2 이상'],
  프로그래머스: ['Level3', 'Level2', 'Level1'],
  해커랭크: ['hard', 'medium', 'easy'],
  default: ['== =='],
};

interface LevelProps {
  platform: string;
}

const LevelSelect = ({ platform }: LevelProps) => {
  const [options, setOptions] = useState<string[]>(levelList.default);

  useEffect(() => {
    switch (platform) {
      case '백준':
        setOptions(levelList.백준);
        break;
      case '프로그래머스':
        setOptions(levelList.프로그래머스);
        break;
      case '해커랭크':
        setOptions(levelList.해커랭크);
        break;
      default:
        break;
    }
  }, [platform]);

  return (
    <select className="translate-all h-11 scale-95 rounded-xl border-[1px] p-3 shadow-sm" id="level" name="level">
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default LevelSelect;
