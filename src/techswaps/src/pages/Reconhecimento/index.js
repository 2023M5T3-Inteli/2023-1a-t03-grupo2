import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeNavbar from '../../components/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '900px',
  },
}));

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const OptionButton = styled(Button)`
  && {
    background-color: ${({ selected }) => (selected ? '#007bff' : 'white')};
    color: ${({ selected }) => (selected ? 'white' : '#007bff')};
    border: 1px solid #E1E1E1;
    border-radius: 2px;
    margin: 10px;
    &:hover {
      background-color: #007bff;
      color: white;
    }
    width: 456px;
    height: 176px;
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
  const classes = useStyles();
  const [showFinishedProjects, setShowFinishedProjects] = useState(true);

  const handleFinishedProjectsClick = () => {
    setShowFinishedProjects(true);
  };

  const handleShadowProjectsClick = () => {
    setShowFinishedProjects(false);
  };

  return (
    <>
    <HomeNavbar />
    <MainContainer style={{backgroundColor:'#F5F6F7', marginLeft: '15%', marginRight: '15%', marginTop: '2%'}}>
      <div className={classes.buttonContainer}>
        <OptionButton
          variant="contained"
          selected={showFinishedProjects}
          onClick={handleFinishedProjectsClick}
        >
        <InsideContainer>
            <h1>Projetos Finalizados</h1>
        </InsideContainer>
        </OptionButton>
        <OptionButton
          variant="contained"
          selected={!showFinishedProjects}
          onClick={handleShadowProjectsClick}
        >
          <InsideContainer>
            <h1>Projetos Shadow</h1>
        </InsideContainer>
        </OptionButton>
      </div>
      {showFinishedProjects ? <FinishedProjects /> : <ShadowProjects />}
    </MainContainer>
    </>
  );
};

export default Reconhecimento;