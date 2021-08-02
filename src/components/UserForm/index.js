import React from 'react';
import {
  FormGroup,
  FormControlLabel,
  Switch,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
} from '@material-ui/core';

import useStyles from './styles';

function UserForm({ userData, handleInputChange }) {
  const classes = useStyles();

  return (
    <FormGroup className={classes.root}>
      <FormControlLabel
        className={classes.inputContainer}
        control={
          <Switch
            checked={userData.ativo}
            onChange={handleInputChange}
            name="ativo"
            color="primary"
          />
        }
        label="Usuário Ativo"
      />

      <div className={classes.inputContainer}>
        <FormLabel component="legend" >Tipo de Usuário</FormLabel>
        <RadioGroup aria-label="gender" name="tipoUsuario" value={userData.tipoUsuario} onChange={handleInputChange}>
          <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
          <FormControlLabel value="Usuário padrão" control={<Radio />} label="Usuário Padrão" />
        </RadioGroup>
      </div>

      <TextField
        required
        name="nome"
        label="Nome"
        placeholder="Nome"
        value={userData.nome}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="sobrenome"
        label="Sobrenome"
        placeholder="Sobrenome"
        value={userData.sobrenome}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="email"
        label="E-mail"
        placeholder="E-mail"
        value={userData.email}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="senha"
        label="Senha"
        type="password"
        placeholder="Senha"
        value={userData.senha}
        onChange={handleInputChange}
      />
    </FormGroup>
  );
}

export default UserForm;