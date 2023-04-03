
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Tab, Tabs } from "@mui/material";
import HomeNavbar from "../../components/Navbar";
import MastHead from "../../components/MastHead";
import axios from "axios";
import { HeroContainer } from "../../components/HeroSection/HeroElements";
import profile from "./img/profile.jpg";
import Complete10 from "./img/Complete10.png"
import TeamWorkFrame from "./img/teamWorkFrame.png"
import HardWorker from "./img/HardWorker.png"

const baseURL = 'http://localhost:3001/';

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ProfilePic = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

const FullName = styled.h2`
  margin: 0;
`;

const JobTitle = styled.h3`
  margin: 0;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const Badge = styled.img`
  height: 50px;
  width: auto;
`;

const HeadMast = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ProfileInfoImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    `;

const Container2 = styled.div`
    margin: 5%;
`;

const ProfilePage = () => {
    // Dummy data for profile information and badges
    const fullName = "Nome Completo";
    const jobTitle = "Cargo";
    const badges = [
        Complete10,
        TeamWorkFrame,
        HardWorker,
    ];

    return (
        <>
                    <ProfileInfoImg>
                        <ProfilePic src={profile} />
                        <ProfileInfo>
                            <FullName>{fullName}</FullName>
                            <JobTitle>{jobTitle}</JobTitle>
                            <BadgeContainer>
                                {badges.map((badge, index) => (
                                    <Badge key={index} src={badge} />
                                ))}
                            </BadgeContainer>
                        </ProfileInfo>
                    </ProfileInfoImg>
                    <Container2>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab"></a>
                            </li>
                        </ul>

                    </Container2>


        </>
    );
};

export default ProfilePage;
