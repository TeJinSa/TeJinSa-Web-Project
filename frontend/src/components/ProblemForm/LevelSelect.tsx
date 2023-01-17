import { useEffect, useState } from 'react';

/* TODO : 이거 분리하기, Platform도 Object로 뽑아놓기 */
const levelList = {
  boj: ['골드', '실버', '브론즈2 이상'],
  programmers: ['Level3', 'Level2', 'Level1'],
  hackerrank: ['hard', 'medium', 'easy'],
  default: ['== =='],
};

interface LevelProps {
  platform: string;
}

const LevelSelect = ({ platform }: LevelProps) => {
  const [options, setOptions] = useState<string[]>(levelList.default);

  useEffect(() => {
    switch (platform) {
      case 'boj':
        setOptions(levelList.boj);
        break;
      case 'programmers':
        setOptions(levelList.programmers);
        break;
      case 'hackerrank':
        setOptions(levelList.hackerrank);
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
