import * as React from 'react';
import logo from '../../techswaps.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ContainerItem, ContainerNavbar } from './style';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';
import styled from 'styled-components'

        const NavWrapper = styled(AppBar)`
          color: white;
        `;
        
        const NavToolbar = styled(Toolbar)`
          display: flex;
          justify-content: space-between;
        `;
        
        const NavTitle = styled(Typography)`
          cursor: pointer;
        `;

export default function HomeNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
        
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };        
          return (
            <NavWrapper sx={{backgroundColor:'white'}} position="static">
              <NavToolbar sx={{color:'black'}}>
                <img src={logo} width="131px" height="50px" alt='logo' sx={{ flexGrow: 1 }} />
                <div>
                  <IconButton aria-label="notifications" color="inherit">
                    <Notifications />
                  </IconButton>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </NavToolbar>
            </NavWrapper>
          );
        }        

{/* <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#FFFFFF' }}>
                    <Toolbar>
                        <div>
                            
                        </div>
                        <ContainerNavbar>
                            <ContainerItem>
                                <NotificationsNoneIcon  sx={{color:'black'}}></NotificationsNoneIcon>
                                <Typography sx={{color:'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '20px' }}>
                                    Deco | Product Owner
                                </Typography>
                            </ContainerItem>
                        </ContainerNavbar>
                    </Toolbar>
                </AppBar>
            </Box> */}