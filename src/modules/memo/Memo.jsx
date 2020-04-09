import React, { useState, useCallback, memo } from 'react';
import propTypes from 'prop-types';
import datas from './datas';

const Row = memo(({ onClick, index, active, value }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <li role="presentation" onClick={handleClick} key={index} className={active ? 'active' : ''}>
      {value}
    </li>
  );
});

Row.propTypes = {
  onClick: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  active: propTypes.bool.isRequired,
  value: propTypes.string.isRequired,
};

const Memo = () => {
  const [state, setState] = useState({
    datas,
  });

  const onItemClick = (index) => {
    setState((oldState) => {
      const tmpDatas = [...oldState.datas];
      tmpDatas[index].isActive = !tmpDatas[index].isActive;

      return {
        ...oldState,
        datas: tmpDatas,
      };
    });
  };

  const memoFunc = useCallback(onItemClick, []);

  return (
    <center>
      <ul>
        {state.datas.map((data, index) => (
          <Row onClick={memoFunc} index={index} active={data.isActive} value={data.name} />
        ))}
      </ul>
    </center>
  );
};

export default Memo;
