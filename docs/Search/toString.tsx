import React, { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [param, setParams] = useState(JSON.stringify(Search.toString()));
  const updateParam = () => {
    let newParam = '';
    if (window.location.search) {
      newParam = `&id=1`;
    } else {
      newParam = '?name=jack';
    }
    window.location.href = window.location.href + newParam;
  };
  return (
    <div>
      <button onClick={updateParam}>更改页面参数</button>
      <br />
      <label>解析结果：</label>
      <span>{param}</span>
    </div>
  );
};
