import * as React from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>About</h1>

      <button onClick={goBack}>goBack</button>
    </div>
  );
};

export default About;
