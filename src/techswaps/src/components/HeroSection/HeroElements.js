import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #F5F6F7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 2300px;
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
export const homeOne = styled.div`

`
export const img1 = styled.img`

`

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px #888888;
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const Imagem = styled.img`
  height: 200px;
  width:auto;
  object-fit: cover;
  margin-top:70px;
  margin-bottom: 70px;
`;

export const Imagem2 = styled.img`
  height: 500px;
  width:auto;
  object-fit: cover;

`;

export const Imagem3 = styled.img`
  height: 500px;
  width:auto;
  object-fit: cover;

`;

export const Imagem4 = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;

`;

export const Imagem5 = styled.img`
  height: 400px;
  width: auto;
  object-fit: cover;
  margin: 2%;

`;


export const Texto = styled.div`
  flex: 1;
  margin-left: 20px;

`;

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Subtitulo = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  background-color: #0672CB;
  border-radius: 2px;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const StyledButtonDark = styled.button`
  background-color: #00447C;
  border-radius: 2px;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  width: 300px;
`;