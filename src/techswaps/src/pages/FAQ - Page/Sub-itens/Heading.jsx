import React from 'react';
import styled from "styled-components";

const Heading = () => {
  return (
    <PageContainer>
      <PageTitle>Frequently Asked Questions</PageTitle>
      {/* O H1 acima */}
    </PageContainer>
  )
  
};

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;

  /* afeta apenas o título em si */
`;

const PageTitle = styled.h1`
font-size: 32px;
font-weight: 100;
text-align: start;
margin-bottom: 20px;
font-family: 'Roboto', sans-serif;
`;


export default Heading;