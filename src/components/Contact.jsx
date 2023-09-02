import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <p>You can reach out to me at contact@example.com</p>
    </ContactSection>
  );
};

export default Contact;
