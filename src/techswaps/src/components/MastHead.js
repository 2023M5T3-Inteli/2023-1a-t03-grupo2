import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tab, Tabs, Box } from '@mui/material';
import styled from '@emotion/styled';
import Popup from "../components/Popup/PopUpCreateProject";
import FormPage from '../pages/NewProject/Formpage';

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
    &:hover {
      background-color: #005ca3;
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
    <AppBar position="margin-top: 50px;" sx={{maxWidth: '100%', margin: '0 auto', backgroundColor: 'transparent' }}>
      <MastheadWrapper>
        <Toolbar>
          <TabContainer value={selectedTab} onChange={handleTabChange}>
            <Tab label="General" id="tab-0" />
            <Tab label="Projects" id="tab-1" />
            <Tab label="Profile" id="tab-2" />
            <Tab label="Recognition" id="tab-3" />
          </TabContainer>
          <CustomButton variant="contained">Create project</CustomButton>
        </Toolbar>
      </MastheadWrapper>
    </AppBar>
  );
}
