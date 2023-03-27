// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { TextField } from '@mui/material';
// import '@fontsource/roboto/300.css';

import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import '@fontsource/roboto/300.css';
import ProporProjeto2 from './Propor2'; //import para o redirect para a próxima página
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     fontFamily: 'roboto',
//   },
//   input: {
//     margin: '0px',
//     width: '30%',
//   },
// });

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     fontFamily: 'roboto',
//     // width: '100%',
//   },
//   input: {
//     margin: '0px',
//     flex: 1,
//   },
//   // line: {
//   //   //width: '100%',
//   //   //alignItems: 'row',
//   //   // justifyContent: 'space-between',
//   // }
// });

////////////////////////////
//////////////////////////
////////////////////////////
//////////////////////////////////

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'roboto',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0px',
    width: '80%',
  },
});

///////////////////////////////
///////////////////////////
//////////////////////////////////
//////////////////////////////


export default function ProporProjeto3() {
  const classes = useStyles();

  const [Setor, setSetor] = React.useState(''); //select
  const [Status, setStatus] = React.useState(''); //select

  return (
    <div className={classes.root}>

      <h1>3. Informe quais perfis de colaboradores serão necessários no projeto</h1>

      <div className={classes.line}>

        <TextField
        label="Título da Vaga"
        variant="outlined"
        placeholder="Insira aqui o nome do seu projeto"
        margin="normal" //none and dense and normal
        required //resposta obrigatória
        sx={{margin:3}}
        />


     <Box sx={{ minWidth: 240 }}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo de Vaga</InputLabel>
          <Select
            //className={classes.input}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Setor} //chamando a const acima
            label="Sector"
            //margin="normal" //não entrou
          >
            <MenuItem value={10}>Technology</MenuItem>
            <MenuItem value={20}>Compliance</MenuItem>
            <MenuItem value={30}>Corporate Governance</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Área de Atuação</InputLabel>
          <Select
            //className={classes.input}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Status} //chamando a const acima
            label="Status"
            //margin="normal" //não entrou
          >
            <MenuItem value={10}>Recrutando membros para iniciar</MenuItem>
            <MenuItem value={20}>Em andamento</MenuItem>
            <MenuItem value={30}>Em revisão para publicar</MenuItem>
          </Select>
        </FormControl>
      </Box>

      </div>
      


      <TextField
        label="Título da Vaga"
        variant="outlined"
        placeholder="Insira aqui o nome do seu projeto"
        margin="normal" //none and dense and normal
        required //resposta obrigatória
        sx={{margin:3}}
      />  

         <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo de Vaga</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Setor} //chamando a const acima
            label="Sector"
            //margin="normal" //não entrou
          >
            <MenuItem value={10}>Technology</MenuItem>
            <MenuItem value={20}>Compliance</MenuItem>
            <MenuItem value={30}>Corporate Governance</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Área de Atuação</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Status} //chamando a const acima
            label="Status"
            //margin="normal" //não entrou
          >
            <MenuItem value={10}>Recrutando membros para iniciar</MenuItem>
            <MenuItem value={20}>Em andamento</MenuItem>
            <MenuItem value={30}>Em revisão para publicar</MenuItem>
          </Select>
        </FormControl>
      </Box>
  
      <Button variant="contained" href="Projetos2"  sx={{margin:2}}>
        Go Back to step 2
      </Button> 

      <Button variant="contained">Submit</Button>
   
        
    </div>
     
      
  );
}