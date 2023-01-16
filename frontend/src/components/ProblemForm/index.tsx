import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { problemAPI } from '../../api/problem';

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

const ProblemForm = () => {
  const [platform, setPlatform] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [viewPreviewImg, setViewPreviewImg] = useState(false);
  const { mutate: problemsMutate } = useMutation(problemAPI.postProblems);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.currentTarget.value);
  };

  const handleImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') setImgFile(reader.result);
      };
    }
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
        screenshot: imgFile,
      };
      problemsMutate(problemsInput);
    }
  };

  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl">문제 등록</h1>
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
        <label
          className="translate-all h-11 scale-95 cursor-pointer rounded-xl border-[1px] p-3 shadow-sm"
          htmlFor="screenshot"
        >
          {imgFile ? (
            <div>
              <div
                className="text-sm hover:underline"
                onMouseEnter={() => setViewPreviewImg(true)}
                onMouseLeave={() => setViewPreviewImg(false)}
              >
                미리보기
              </div>
              {viewPreviewImg && <img className="w-fit" src={imgFile} alt="미리보기" />}
            </div>
          ) : (
            <div className="hover:underline">이미지 업로드</div>
          )}
          {/* TODO : drag-drop 기능 추가 */}
          <input className="hidden" type="file" id="screenshot" name="screenshot" onChange={handleImgFile} />
        </label>

        <div className="m-2 flex justify-around gap-4">
          <button
            className="h-12 w-full cursor-pointer rounded-2xl border-2 py-4 font-semibold hover:bg-gray-200"
            type="button"
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
