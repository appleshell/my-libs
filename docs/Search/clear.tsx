import React from 'react';
import { Search } from 'auto-libs';

export default () => {
  const clearParam = () => {
    Search.clear();
  };
  return (
    <div>
      <button onClick={clearParam}>删除name</button>
    </div>
  );
};
