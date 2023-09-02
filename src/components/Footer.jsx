import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  width:100%;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;
