import { Search } from 'auto-libs';

export default () => {
  const setParam = () => {
    Search.define('name', 'jjack');
  };
  return (
    <div>
      <button onClick={setParam}>设置name</button>
    </div>
  );
};
