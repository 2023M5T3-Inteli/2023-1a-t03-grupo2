import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../techswaps.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ContainerNavbar } from './style';

export default function HomeNavbar() {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#FFFFFF' }}>
                    <Toolbar>
                        <div>
                            <img src={logo} width="131px" height="50px" alt='logo' sx={{ flexGrow: 1 }} />
                        </div>
                        
                        <ContainerNavbar>
                            <NotificationsNoneIcon height='24px' width='28px' sx={{color:'black'}}></NotificationsNoneIcon>
                        </ContainerNavbar>
                    </Toolbar>
                    
                </AppBar>
            </Box>
    );
}