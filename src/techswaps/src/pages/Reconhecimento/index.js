import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Tab, Tabs } from '@mui/material';
import HomeNavbar from '../../components/Navbar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: #fbfbfb;
  margin: 2% 15% 0;
  padding: 48px;
  position: relative;
`;

const TabContainer = styled(Tabs)`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const OptionButton = styled(Button)`
  && {
    background-color: ${({ selected }) => (selected ? '#007bff' : 'white')};
    color: ${({ selected }) => (selected ? 'white' : '#007bff')};
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    margin: 16px;
    padding: 24px;
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
    text-transform: capitalize;
    position: absolute;
    top: 16px;
    right: 16px;
    &:hover {
      background-color: #005ca3;
    }
  }
`;
const InsideContainer = styled.div`
    margin-Y: 2%;
    margin-X: 5%;
    width: 310px;
    height: 140px;
    text-align: center;
    background-color: ${({ selected }) => (selected ? '#007bff' : 'white')};
    color: ${({ selected }) => (selected ? 'white' : '#007bff')};
`;

const FinishedProjects = () => {
  return (
    <div>
      <h2>Lista de Projetos Finalizados</h2>
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

  const handleFinishedProjectsClick = () => {
    setShowFinishedProjects(true);
  };

  const handleShadowProjectsClick = () => {
    setShowFinishedProjects(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <HomeNavbar />
      <MainContainer>
        <Container>
          <TabContainer value={selectedTab} onChange={handleTabChange}>
            <Tab label="Geral" id="tab-0" />
            <Tab label="Projetos" id="tab-1" />
            <Tab label="Perfil" id="tab-2" />
            <Tab label="Reconhecimento" id="tab-3" />
          </TabContainer>
          <CustomButton variant="contained">Criar um p</CustomButton>
          {selectedTab === 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <OptionButton
                variant="contained"
                selected={showFinishedProjects}
                onClick={handleFinishedProjectsClick}
             
                >
                Projetos Finalizados
              </OptionButton>
              <OptionButton
                variant="contained"
                selected={!showFinishedProjects}
                onClick={handleShadowProjectsClick}
              >
                Projetos Shadow
              </OptionButton>
            </div>
          )}

          {selectedTab === 1 && (
            <div>
              <h2>Content for Tab 2</h2>
            </div>
          )}
          {selectedTab === 0 && showFinishedProjects ? <FinishedProjects /> : <ShadowProjects />}
        </Container>
      </MainContainer>
    </>
  );
};

export default Reconhecimento;
