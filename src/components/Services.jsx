import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 2rem;
  width:100%;
  display: flex;
  gap: 1rem;
`;

const ServiceCard = styled.div`
  border: 2px solid #ddd;
  box-shadow:0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  font-color:purple;
`;

const Services = () => {
  return (
    <>
    <h2>Services</h2>
    <ServicesSection>
     
      <ServiceCard>
        <h3>Web Development</h3>
        <p>Details about web development services...</p>
      </ServiceCard>
      <ServiceCard>
        <h3>App development</h3>
        <p>We can develop your app</p>
      </ServiceCard>
      <ServiceCard>
        <h3>Database</h3>
        <p>Details about databases</p>
      </ServiceCard>
      <ServiceCard>
        <h3>MERN</h3>
        <p>mern refer to development using four technology
          Mongodb,React,express,Node
        </p>
      </ServiceCard>
      {/* Add more service cards */}
    </ServicesSection>
    </>
  );
};

export default Services;
