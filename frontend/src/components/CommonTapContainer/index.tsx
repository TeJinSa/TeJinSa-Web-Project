import React, { useState } from 'react';

const TapContainer = () => {
  const [radioSelected, setRadioSelected] = useState<'ranking' | 'problemList' | 'dayList'>();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value === 'ranking' || value === 'problemList' || value === 'dayList') {
      setRadioSelected(value);
    } else {
      throw new Error('잘못된 라디오 값 입니다.');
    }
  };

  return (
    <div className="">
      <div className="text-[#b7b7b7 [&>*]:flex-center flex  justify-around rounded-t-2xl bg-[#565656] text-[#b7b7b7] [&>*]:w-full [&>*]:p-4">
        <label className={`${radioSelected === 'ranking' && 'bg-white text-black'} rounded-tl-2xl`} htmlFor="ranking">
          랭킹
          <input
            className="hidden"
            type="radio"
            id="ranking"
            name="category"
            value="ranking"
            onChange={handleRadioChange}
          />
        </label>
        <label className={`${radioSelected === 'problemList' && 'bg-white text-black'}`} htmlFor="problemList">
          푼 문제 목록(전체)
          <input
            className="hidden"
            type="radio"
            id="problemList"
            name="category"
            value="problemList"
            onChange={handleRadioChange}
          />
        </label>
        <label className={`${radioSelected === 'dayList' && 'bg-white text-black'} rounded-tr-2xl`} htmlFor="dayList">
          회차별 목록
          <input
            className="hidden"
            type="radio"
            id="dayList"
            name="category"
            value="dayList"
            onChange={handleRadioChange}
          />
        </label>
      </div>
      <div className="flex-center h-full min-h-[65vh] w-full rounded-b-2xl bg-white">
        {radioSelected === 'ranking' && <div>랭킹컴포넌트</div>}
        {radioSelected === 'problemList' && <div>푼문제컴포넌트</div>}
        {radioSelected === 'dayList' && <div>회차별컴포넌트</div>}
      </div>
    </div>
  );
};

export default TapContainer;
