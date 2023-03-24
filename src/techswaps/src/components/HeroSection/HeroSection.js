import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react';
import { HeroBg, HeroContainer, homeOne, Container, Texto, Titulo, Subtitulo, Imagem, Imagem2, Imagem3, Imagem4, Imagem5, StyledButton, StyledButtonDark, SearchInput } from './HeroElements'
import { experimentalStyled as styled } from '@mui/material/styles';
//import image from '../HeroSection/img/techswapsblue.png'
//import consultImg from '../HeroSection/img/consultImg.png'
// import meetImg from '../HeroSection/img/meet2.png'
// import blueMeet from '../HeroSection/img/blueMeeting.png'
// import dados from '../HeroSection/img/dados.png'
import Modal from '../AddPersonModal/Modal';




//modal que nao esta funcionando   
const HeroSection = () => {
    const [isOpen, setOpen] = useState(false)
    //console.log("isOpen", isOpen)
    //final do modal que nao esta funcionando



    return (
        
        
    <HeroContainer>
        <HeroBg>
            <Container>
                <Texto>
                    <Titulo>Bem-vindo(a) ao TechSwaps</Titulo>
                    <Subtitulo>Participe do desenvolvimento de grandes ideias dentro da Dell.</Subtitulo>
                </Texto>
                {/* <Imagem src={image} alt="Imagem" /> */}
            </Container>
            <Container>
                {/* <Imagem2 src={consultImg} alt="Imagem" /> */}
                <Texto>
                    <Titulo>Sobre o TechSwaps</Titulo>
                    <Subtitulo>A plataforma visa ajudar profissionais a ampliar suas habilidades e conhecimentos, ao mesmo tempo em que ajuda projetos temporários a encontrar profissionais capacitados e interessados em aprender.</Subtitulo>
                </Texto>
            </Container>
            <Container>
                <Texto>
                    <Titulo>Escolha o que você irá aprender!</Titulo>
                    <Subtitulo>Podendo ser como shadow ou como tecnico, você poderá escolher a área e o modelo que irá aprender!</Subtitulo>
                    <StyledButton>Seja Shadow</StyledButton>
                    <StyledButtonDark>Seja Técnico</StyledButtonDark>
                     
                    

                </Texto>
                {/* <Imagem3 src={meetImg} alt="Imagem" /> */}
            </Container>
            <Container>
                {/* <Imagem4 src={blueMeet} alt="Imagem" /> */}
            </Container>
            <Container>
                {/* <Imagem5 src={dados} alt="Imagem" /> */}
                <Texto>
                    <Titulo>Cadastre projetos em andamento</Titulo>
                    <Subtitulo>Cadastre um projeto e agregue uma pessoa com a visão de fora ao seu time. Além disso, incentiva a criação de uma rede de contatos entre os profissionais de TI, facilitando futuros aprendizados e projetos. </Subtitulo>
                    <StyledButton>Proponha um projeto</StyledButton>
                    
                    
                </Texto>
            </Container>
            





            </HeroBg>
        </HeroContainer>

    )
}



export default HeroSection;


