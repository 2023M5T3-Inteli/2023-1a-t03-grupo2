//Formulário pequeno com dois campos de entrada de texto (input).
    //Título: Para começar, nos diga as informações iniciais do projeto
    //Input 1: Nome do projeto
    //Input 2: Descrição do projeto

import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
// import '@fontsource/roboto/300.css';
import ProporProjeto2 from './Propor2'; //import para o redirect para a próxima página
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', //tira do meio
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'roboto',

  },
  input: {
    // marginBottom: {    
    //     margin: '30px',   
    //   },
    margin: "0px",
    width: '80%', //extensão do input
    // marginBottom: '40rem',
  },
});

export default function ProporProjeto1() {
  const classes = useStyles();

  const [Setor, setSetor] = React.useState(''); //select
  const [Status, setStatus] = React.useState(''); //select

  return (
    <div className={classes.root}>
      <h1>1. Para começar, nos diga as informações iniciais do projeto</h1>
      <TextField
        className={classes.input}
        label="Nome do Projeto"
        variant="outlined"
        placeholder="Insira aqui o nome do seu projeto"
        margin="normal" //none and dense and normal
        required //resposta obrigatória
     />
      <TextField
        className={classes.input}
        label="Description"
        variant="outlined"
        sx={{margin:2}}
        placeholder="Máximo de 5000 caracteres"
        multiline //permite que tenha várias linhas
        inputProps={{ maxLength: 5000}} //máximo de 5000 caracteres
        required //resposta obrigatória
        margin="normal" //none and dense and normal
      />

      <Button variant="contained" href="Projetos2" sx={{margin:3}}>
        Next
      </Button>     
      
    </div>
  );
}