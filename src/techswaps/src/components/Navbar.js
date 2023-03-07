import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../techswaps.svg'

export default function HomeNavbar() {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#FFFFFF' }}>
                    <Toolbar>
                        <img src={logo} width="131px" height="50px" alt='logo' sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </Box>
    );
}