import React, { useState } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
//import { ExpandMore } from '@mui/icons-material';
import styled from 'styled-components';

//personaliza a setinha chevron
const Chevron = styled.span`
display: inline-block;
border-right: 2px solid black;
border-bottom: 2px solid black;
width: 9px; 
height: 9px;
transform: rotate(-315deg);
margin: 0 8px;
color: #808080;
&:hover {
  transition: 1s;
  transform: rotate(90deg);
}
`

//A seta aqui fica acima do título
// const TitleWrapper = styled.div`
//   border: 1px solid #dcdcdc;
//   padding: 15px;
//   margin-bottom: 15px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

//display content deixa ao lado certinho
//display flex vai deixar o chevron centralizado logo acima do título
const TitleWrapper = styled.div`
  display: content;
  flex-direction: column;
  align-items: right;
  // border: 2px solid black;
  padding: 15px;
  margin-top: 25px;
  margin-bottom: 15px;
  margin-right: 80px;
  //acima alinha com o hero style
  border: 0.1px solid #dcdcdc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

//A estilização abaixo é para caso prefira o conteúdo ao lado do título

// const TitleWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   border: 2px solid #ddd;
//   padding: 15px;
//   margin-bottom: 15px;
//   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
// `;


const Title = (props) => {

  const [expanded, setExpanded] = useState(false);
  
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  

  return (
    <TitleWrapper>
      <IconButton sx={{ p: 0 }} onClick={handleExpand}>
        <Chevron></Chevron>
      </IconButton>
      <Typography variant="h5" sx={{ mb: 2, color: "black"}}>
        {props.title}
      </Typography>
      <Collapse in={expanded}>
        <Typography sx={{ mt: 2, mb: 1, borderBottom: '1px solid #ccc', color: "gray", fontSize: 14, justifyContent: 'center'}}>
          {props.content}
        </Typography>
      </Collapse>
    </TitleWrapper>
  );

};

export default Title;
