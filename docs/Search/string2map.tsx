import React, { useState } from 'react';
import { Search } from 'auto-libs';

export default () => {
  const [outParam, setOutParam] = useState('')
  const param = 'name=jack&id=1'
  const updateParam = () => {
    setOutParam(Search.string2map(param))
  };
  return (
    <div>
      <button onClick={updateParam}>转换</button>
      <br />
      <label>输入</label>
      <span>{param}</span>
      <br/>
      <label>输出：</label>
      <span>{JSON.stringify(outParam)}</span>
    </div>
  );
};
