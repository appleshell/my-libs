import { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [isExist, setIsExist] = useState<boolean>();
  const judgeParam = () => {
    const val = Search.exist('name');
    setIsExist(val);
  };
  return (
    <div>
      <button onClick={judgeParam}>判断是否有name</button>
      <br />
      <label>判断结果：</label>
      <span>{isExist?.toString()}</span>
    </div>
  );
};
