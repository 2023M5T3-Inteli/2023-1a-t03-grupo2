import React, { useState } from 'react';
import { HeroBg, HeroContainer, homeOne, Container, Texto, Titulo, Subtitulo, Imagem, Imagem2, Imagem3, Imagem4, Imagem5, StyledButton, StyledButtonDark, SearchInput } from './HeroElements'
import image from '../HeroSection/img/techswapsblue.png'
import consultImg from '../HeroSection/img/consultImg.png'
import meetImg from '../HeroSection/img/meet2.png'
import blueMeet from '../HeroSection/img/blueMeeting.png'
import dados from '../HeroSection/img/dados.png'
import Modal from '../AddPersonModal/Modal';
import Masthead from '../MastHead';


const HeroSection = () => {
    const [isOpen, setOpen] = useState(false);
    // console.log("isOpen", isOpen);
    return (
        <>
            <Container>
                <Texto>
                    <Titulo>Welcome to TechSwaps</Titulo>
                    <Subtitulo>Join the development of great ideas within Dell.</Subtitulo>
                </Texto>
                <Imagem src={image} alt="Image" />
            </Container>
            <Container>
                <Imagem2 src={consultImg} alt="Image" />
                <Texto>
                    <Titulo>About TechSwaps</Titulo>
                    <Subtitulo>The platform aims to help professionals expand their skills and knowledge, while also helping temporary projects find skilled professionals interested in learning.</Subtitulo>
                </Texto>
            </Container>
            <Container>
                <Texto>
                    <Titulo>Choose what you will learn!</Titulo>
                    <Subtitulo>Whether as a shadow or as a technician, you can choose the area and model you will learn!</Subtitulo>
                    <StyledButton>Be a Shadow</StyledButton>
                    <StyledButtonDark>Be a Technician</StyledButtonDark>
                </Texto>
                <Imagem3 src={meetImg} alt="Image" />
            </Container>
            <Container>
                <Imagem4 src={blueMeet} alt="Image" />
            </Container>
            <Container>
                <Imagem5 src={dados} alt="Image" />
                <Texto>
                    <Titulo>Register ongoing projects</Titulo>
                    <Subtitulo>Register a project and add someone with an outside perspective to your team. In addition, it encourages the creation of a network of contacts among IT professionals, facilitating future learning and projects.</Subtitulo>
                    <StyledButton>Propose a Project</StyledButton>
                </Texto>
            </Container>
        </>
    );
};

export default HeroSection;
