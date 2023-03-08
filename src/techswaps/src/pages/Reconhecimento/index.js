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
      {showFinishedProjects ? <FinishedProjects /> : <ShadowProjects />}
    </MainContainer>
    </>
  );
};

export default Reconhecimento;