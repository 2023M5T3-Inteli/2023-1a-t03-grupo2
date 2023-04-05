import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Tab, Tabs, Box } from '@mui/material';
import styled from '@emotion/styled';
import { ProjectsPage } from '../pages/ProjectsPage';
import HeroSection from './HeroSection/HeroSection';
import ProfilePage from '../pages/ProfilePage/profilePage';
import Reconhecimento from '../pages/Reconhecimento';
import MainPage from '../pages/FAQ - Page/FaqPage';


const TabContainer = styled(Tabs)`
    width: 100%;
`;

const CustomButton = styled(Button)`
  && {
    color: white;
    padding: 10px 24px;
    text-transform: capitalize;
    position: absolute;
    right: 16px;
    background-color: #005ca3;
    &:hover {
      background-color: #327CB5;
    }
  }
`;

const MastheadWrapper = styled(Box)`
  && {

  }
`;

export default function Masthead() {
  const [selectedTab, setSelectedTab] = React.useState(0);


  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };





  return (
    <>
      <AppBar position="margin-top: 50px;" sx={{ maxWidth: '100%', margin: '0 auto', backgroundColor: 'transparent' }}>
        <MastheadWrapper>

          <Toolbar>
            <TabContainer value={selectedTab} onChange={handleTabChange}>
              <Tab label="Home" id="tab-0" />
              <Tab label="Projects" id="tab-1" />
              <Tab label="Reconhecimento" id="tab-2" />
              <Tab label="Profile" id="tab-3" />
              <Tab label="FAQ" id="tab-4" />
            </TabContainer>
            <CustomButton >Edit Profile</CustomButton>
          </Toolbar>
        </MastheadWrapper>
        {selectedTab === 0 && <HeroSection />}
        {selectedTab === 1 && <ProjectsPage />}
        {selectedTab === 2 && <Reconhecimento />}
        {selectedTab === 3 && <ProfilePage />}
        {selectedTab === 4 && <MainPage />}
      </AppBar>

    </>
  );
}
