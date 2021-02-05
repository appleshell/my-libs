import React from 'react';
import { Search } from 'auto-libs';

export default () => {
  const removeParam = () => {
    Search.remove('name');
  };
  return (
    <div>
      <button onClick={removeParam}>删除name</button>
    </div>
  );
};
