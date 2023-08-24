import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'antd';
import service from '~/services';
import style from './index.less';
import classNames from 'classnames/bind';
import {inject, observer} from 'mobx-react';

const cx = classNames.bind(style);

const Home = ({testStore}: any) => {
  const {count, setCount} = testStore;

  const navigate = useNavigate();

  const toAbout = () => {
    navigate('/about');
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    service.test().then((res) => {
      console.log(res);
    });
    service.hello().then((res) => {
      console.log(res);
    });
  }, []);

  const className = cx({
    home: true,
  });

  return (
    <div className={className}>
      <h1>Home</h1>
      <button onClick={toAbout}>toAbout</button>
      <br />
      <h2>{count}</h2>
      <Button type='primary' onClick={handleAdd}>
        increment
      </Button>
      <Button type='primary' onClick={handleMinus}>
        decrement
      </Button>
    </div>
  );
};

export default inject('testStore')(observer(Home));
