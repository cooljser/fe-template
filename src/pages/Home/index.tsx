import * as React from 'react';
import {useNavigate} from 'react-router-dom';
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
    </div>
  );
};

export default Home;
