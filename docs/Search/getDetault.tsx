import React, { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [param, setParams] = useState<string | undefined>('');
  const getParam = () => {
    const val: string = Search.getDefault('city', '上海');
    setParams(val);
  };
  return (
    <div>
      <button onClick={getParam}>获取city</button>
      <br />
      <label>解析结果：</label>
      <span>{param}</span>
    </div>
  );
};
