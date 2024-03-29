//Código do bloco de estilização

import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #F5F6F7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1600px;
    position: relative;
    z-index: 1;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
    font-family: "Roboto", sans-serif;
    margin-bottom: 60px;
`
export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`