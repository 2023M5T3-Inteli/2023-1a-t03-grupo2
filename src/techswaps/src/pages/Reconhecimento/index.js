import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Tab, Tabs } from "@mui/material";
import HomeNavbar from "../../components/Navbar";
import MastHead from "../../components/MastHead";
import axios from "axios";
import { HeroContainer } from "../../components/HeroSection/HeroElements";

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

  return (
    <>


        <MainContainer>
          <Container>
            
            {selectedTab === 0 && (
              <ButtonContainer>
                <OptionButton
                  variant="contained"
                  selected={showFinishedProjects}
                  onClick={handleFinishedProjectsClick}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  <InsideContainer>
                    <h1>Projetos Finalizados</h1>
                  </InsideContainer>
                </OptionButton>
                <OptionButton
                  variant="contained"
                  selected={!showFinishedProjects}
                  onClick={handleShadowProjectsClick}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  <InsideContainer>
                    <h1>Projetos Shadow</h1>
                  </InsideContainer>
                </OptionButton>
              </ButtonContainer>
            )}

            {selectedTab === 1 && (
              <div>
                <h2>Content for Tab 2</h2>
              </div>
            )}
            {selectedTab === 0 && showFinishedProjects ? (
              <FinishedProjects />
            ) : (
              <ShadowProjects />
            )}
          </Container>
        </MainContainer>
    </>
  );
};

export default Reconhecimento;
