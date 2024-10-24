import React from 'react';
import '../CSS/Home.css';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import constants from '../constants/constants';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="animation-container">
        <div className="image-container">
          {/* First image moves out to the right */}
          <img
            src="/unizircle/unnamed.png"
            alt="First Image"
            height={500}
            className="first-image"
          />

          {/* Second image comes in from the left */}
          <img
            src="/unizircle/unizircle.png"
            alt="Second Image"
            className="second-image"
          />
        </div>

        {/* Button below the images */}
        <div className="button-container">
          <Button size="lg" color="primary" onClick={() => navigate(constants.root + "menu")}>
            Acceder
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
