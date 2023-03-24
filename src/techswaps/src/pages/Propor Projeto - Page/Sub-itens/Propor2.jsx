import React from 'react';
import { makeStyles, Theme } from '@mui/styles';
import { TextField } from '@mui/material';
// import '@fontsource/roboto/300.css';
import ProporProjeto2 from './Propor2'; //import para o redirect para a próxima página
import { Button } from '@mui/material';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack'

import Tag from './TagInput';

//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


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

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  ////////////



  /////////

  return (
    <div className={classes.root}>
      <h1>2. Precisamos de algumas informações adicionais sobre o projeto</h1>

      <Box sx={{ minWidth: 1025 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sector</InputLabel>
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

      <Box sx={{ minWidth: 1025 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
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

      <Stack direction="row" spacing={1}>
      <Chip label="Aqui tem que ter tags" onClick={handleClick} />
      <Chip label="Mas adicionadas pelo usuário" variant="outlined" onClick={handleClick} />
      <Chip label="É o usuário quem vai inserir as tags ligadas ao projeto" variant="outlined" onClick={handleClick} />
      <Chip label="Helppp!!!" variant="outlined" onClick={handleClick} />
    </Stack>

    <Stack direction="row" spacing={1}>
      <Chip label="teste para ser 'deletável'" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>

    <Tag/>
      
      {/* Inputs das datas */}
      <form className={classes.input} noValidate>
      <TextField
        id="date"
        label= "Data de Começo"
        type="date"
        defaultValue="2023-05-24"
        className={classes.textField}
        InputLabelProps={{ shrink: true, }}
        margin= "normal"
        sx={{ minWidth: 512 }}
      />

      <TextField
        id="date"
        label= "Data de Término"
        type="date"
        defaultValue="2023-06-24"
        className={classes.textField}
        InputLabelProps={{ shrink: true, }}
        margin= "normal"
        sx={{ minWidth: 512 }}
      />

      </form>
      

      <Button variant="contained" href="Projetos1" sx={{margin:2}}>
        Go Back to step 1
      </Button> 
      
      <Button variant="contained" href="Projetos3" sx={{margin:1}}>
        Next
      </Button>    

  
      
    </div>
  );
}

