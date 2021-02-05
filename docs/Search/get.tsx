import React, { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [param, setParams] = useState<string | undefined>();
  const updateParam = () => {
    let newParam = '';
    if (window.location.search) {
      newParam = `&id=${Math.random().toFixed(4)}`;
    } else {
      newParam = '?name=jack';
    }
    window.location.href = window.location.href + newParam;
  };
  const getParam = () => {
    const val: string | undefined = Search.get('name');
    setParams(val);
  };
  return (
    <div>
      <button onClick={updateParam}>更改页面参数</button>
      <button onClick={getParam}>获取name</button>
      <br />
      <label>解析结果：</label>
      <span>{param}</span>
    </div>
  );
};
