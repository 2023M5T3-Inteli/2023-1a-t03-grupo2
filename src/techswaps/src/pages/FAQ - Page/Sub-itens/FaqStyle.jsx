import styled from 'styled-components';

export const HeroContainer = styled.div`
    //background: #F5F6F7;
    //background-color: rgba(217, 217, 217, 0); 
    background: linear-gradient(180deg, #DAF5FD 0%, rgba(217, 217, 217, 0) 200px);
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
    margin-left: 5%;
    margin-right: 10%;
`