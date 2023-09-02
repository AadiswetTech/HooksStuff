
import React from 'react';
import styled from 'styled-components';
import akpic from '../assets/akpic.jpg';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:skyblue;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;

  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
         <img src={akpic}/>
      <HeroOverlay />
      <HeroContent>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing My Work and Skills</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

