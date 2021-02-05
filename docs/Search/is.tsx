import { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [isMatch, setIsMatch] = useState<boolean>();
  const judgeParam = () => {
    const val = Search.is('name', 'jack');
    setIsMatch(val);
  };
  return (
    <div>
      <button onClick={judgeParam}>判断name是否等于jack</button>
      <br />
      <label>判断结果：</label>
      <span>{isMatch?.toString()}</span>
    </div>
  );
};
