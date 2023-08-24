import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'antd';
import style from './index.less';

const Home = () => {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate('/about');
  };
  return (
    <div className={style.home}>
      <h1>Home</h1>
      <button onClick={toAbout}>toAbout</button>
      <Button type='primary'>Button</Button>
    </div>
  );
};

export default Home;
