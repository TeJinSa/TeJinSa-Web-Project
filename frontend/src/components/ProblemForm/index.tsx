import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { problemAPI } from '../../api/problem';
import InputFile from './InputFile';

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

/* TODO : 컴포넌트 다른파일로 분리하기 */
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

interface ProblemFormProps {
  close: () => void;
}

/* 고민 : Problem Form의 각각 data를 Component로 분리? (사유 : 컴포넌트 기독성) */
const ProblemForm = ({ close }: ProblemFormProps) => {
  const [platform, setPlatform] = useState('');

  const { mutate: problemsMutate } = useMutation(problemAPI.postProblems);

  const [imgUrl, setImgUrl] = useState('');

  const updateImg = (url: string) => {
    setImgUrl(url);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.currentTarget.value);
  };

  const handleProblemForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values: { platform?: string; level?: string; link?: string } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (values.platform && values.level && values.link) {
      const problemsInput = {
        platform: values.platform,
        level: values.level,
        link: values.link,
        screenshot: imgUrl,
      };
      problemsMutate(problemsInput);
    }
  };

  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl">문제 등록</h1>
      {/* TODO : 입력부분 모두 추상화 */}
      <form className="flex w-96 flex-col gap-1" onSubmit={handleProblemForm}>
        <select
          className=" translate-all h-11 scale-95 rounded-xl border-[1px] p-3 shadow-sm"
          id="platform"
          onChange={handleLevelChange}
          name="platform"
        >
          {/* TODO : map으로 value 불러오기. 함수형 화 시키기 */}
          <option value="none">== 플랫폼 선택 ==</option>
          <option value="boj">백준</option>
          <option value="programmers">프로그래머스</option>
          <option value="hackerrank">해커랭크</option>
        </select>

        <LevelSelect platform={platform} />

        <input
          className="translate-all h-11 scale-95 rounded-xl border-[1px] p-3 shadow-sm"
          type="text"
          id="link"
          placeholder="문제 링크"
          autoComplete="off"
          name="link"
        />

        <InputFile updateUrl={handleImgUrl} />

        <div className="m-2 flex justify-around gap-4">
          <button
            className="h-12 w-full cursor-pointer rounded-2xl border-2 py-4 font-semibold hover:bg-gray-200"
            type="button"
            onClick={close}
          >
            취소
          </button>
          <button
            className="h-12 w-full cursor-pointer rounded-2xl border-2 py-4 font-semibold hover:bg-[#745AA8] hover:text-white"
            type="submit"
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProblemForm;
