import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeNavbar from "../../components/Navbar";
import MastHead from "../../components/MastHead";
import axios from "axios";
import { HeroContainer } from "../../components/HeroSection/HeroElements";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Tab, Tabs, Box } from '@mui/material';

const baseURL = 'http://localhost:3001/';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f6f6f6;
text-align: center;
min-height: 100vh;
`;

const TitleProjetosFinalizados = styled.h2`
    color: #000
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 680px;
  margin: 0 auto;
  margin-top: 100px;
`;

const OptionButton = styled(Button)`
  && {
    background-color: ${({ selected }) => (selected ? "#007bff" : "white")};
    color: ${({ selected }) => (selected ? "white" : "#007bff")};
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    margin: 26px;
    text-align: center;
    transition: background-color 0.2s ease;
    width: 456px;
    height: 176px;
    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
`;

const CustomButton = styled(Button)`
  && {
    background-color: #0070c9;
    color: white;
    padding: 12px 24px;
    position: absolute;
    top: 16px;
    right: 16px;
    &:hover {
      background-color: #005ca3;
    }
  }
`;
const InsideContainer = styled.div`
  margin-y: 2%;
  margin-x: 5%;
  width: 310px;
  height: 140px;
  text-align: center;

`;

const FinishedProjects = () => {
  return (
    <div>
      <TitleProjetosFinalizados>Lista de Projetos Finalizados</TitleProjetosFinalizados>
    </div>
  );
};

const ShadowProjects = () => {
  return (
    <div>
      <h2>Lista de Projetos Shadow</h2>
    </div>
  );
};

const Reconhecimento = () => {
  const [showFinishedProjects, setShowFinishedProjects] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [post, setPost] = React.useState(null);

  const handleFinishedProjectsClick = () => {
    setShowFinishedProjects(true);
  };

  const handleShadowProjectsClick = () => {
    setShowFinishedProjects(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    fetch('http://localhost:3001/projeto')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const MastheadWrapper = styled(Box)`
  && {

  }
`;

  const TabContainer = styled(Tabs)`
    width: 100%;
`;

  const SelectOption = styled.div`
      margin-top: 100px;
`;

  const PageContainer = styled.div`
  margin-top: 100px;
  margin-left: 7%;
  margin-right:7%;
`;

  const PageTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
    text-align: start;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    color: black;
  `;

  const PageBody = styled.h3`
    font-size: 20px;
    font-weight: 400;
    text-align: start;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    color: black;
  
  `;

  return (
    <>


      <MainContainer>
        <Container>

          <PageContainer>



            <PageTitle>Recognition and Achievements</PageTitle>
            <PageBody> Welcome to your Recognition and Achievements page! Here, we highlight your accomplishments within the TechSwaps platform, showcasing the projects you've successfully contributed to and the skills you've gained along the way. We believe in acknowledging your hard work and growth as you continue to develop professionally. </PageBody>
            
          </PageContainer>
            

            <SelectOption>
              <AppBar position="margin-top: 50px;" sx={{ maxWidth: '100%', margin: '0 auto', backgroundColor: 'transparent' }}>
                <MastheadWrapper>

                  <Toolbar>
                    <TabContainer value={selectedTab} onChange={handleTabChange}>
                      <Tab label="Finished Projects" id="tab-0" />
                      <Tab label="Shadow Projects" id="tab-1" />
                    </TabContainer>
                  </Toolbar>
                </MastheadWrapper>
                {selectedTab === 0 && <FinishedProjects />}
                {selectedTab === 1 && <ShadowProjects />}
              </AppBar>
            </SelectOption>


        </Container>
      </MainContainer>
    </>
  );
};

export default Reconhecimento;
