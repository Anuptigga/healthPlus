import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 15px 30px;
  text-align: center;
  border-top: 1px solid #ddd;

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Health Plus. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
