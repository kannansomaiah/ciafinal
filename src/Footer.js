import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Footer = () => (
  <Div>
    <Paragraph>Footer Text 💅</Paragraph>
  </Div>
);

export default Footer;