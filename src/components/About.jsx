import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background-color:pink;
  width:100%;
  font-size:30px;
  font-color:royalblue;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
 align-items:center;
`;

const About = () => {
  return (
    <AboutSection>
      <h2><i>About Me</i></h2>
      <p>I am Akshat Raj.Recently i have complete my graduation from catalyst college (Patna)
         majoring in computer science and software development.i am a technology enthusiast, 
         my Tech stack is MERN(mongo db,Express,REACT,Node).
      </p>
    </AboutSection>
  );
};

export default About;
