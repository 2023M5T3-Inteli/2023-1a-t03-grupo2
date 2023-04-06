import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Link,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import axios from 'axios';
import Complete10 from "../ProfilePage/img/Complete10.png"
import HardWorker from "../ProfilePage/img/HardWorker.png"
import styled from 'styled-components';



export default function ProfilePage() {

  const [data, setData] = useState({ name: '', email: '', phone: '', city: '' })


  useEffect(() => {
    axios.get('https://localhost3001/projeto')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(data)

  const ProfileImages = styled.img`
    height: 50px;
    width: 50px;
    margin: 10px;
  `;

  const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;


  return (
    <section>
      <Container maxWidth="lg" sx={{ py: 5 }}>

        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Card className="mb-4" sx={{ mx: 'auto', margin: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  sx={{ width: 150, height: 150, mx: 'auto', display: 'block' }}
                />
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Full Stack Developer
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Rio de Janeiro - RJ
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary">
                    Follow
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ ml: 1 }}>
                    Message
                  </Button>
                </Box>
                <ImagesContainer>
                  <ProfileImages src={Complete10} />

                  <ProfileImages src={HardWorker} />

                </ImagesContainer>
              </CardContent>
            </Card>


            <Card className="mb-4 mb-lg-0" sx={{ mx: 'auto', margin: 3 }}>
              <CardContent sx={{ p: 0 }}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LanguageIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="https://inteli.edu.br" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="xandebrabe" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TwitterIcon sx={{ color: '#55acee' }} />
                    </ListItemIcon>
                    <ListItemText primary="@xandao" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: '#ac2bac' }} />
                    </ListItemIcon>
                    <ListItemText primary="xande" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FacebookIcon sx={{ color: '#3b5998' }} />
                    </ListItemIcon>
                    <ListItemText primary="xande" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={8}>
            <Card className="mb-4" sx={{ mx: 'auto', margin: 3 }} >
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Typography>Full Name</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle2" color="textSecondary">
                      Alexandre Fonseca
                    </Typography>
                  </Grid>
                </Grid>
                <hr />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle2" color="textSecondary">
                      alexandre.fonseca@sou.inteli.edu
                    </Typography>
                  </Grid>
                </Grid>
                <hr />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle2" color="textSecondary">
                      +55 (11)99952-2342
                    </Typography>
                  </Grid>
                </Grid>
                <hr />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle2" color="textSecondary">
                      Rio de Janeiro - RJ
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

