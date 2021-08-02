import React from 'react';
import {
  Paper,
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core';

import useStyles from './styles';

function LoginForm({ data, handleInputChange, handleLogin }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <FormGroup className={classes.root}>
          <TextField
            required
            name="email"
            label="E-mail"
            placeholder="E-mail"
            value={data.email}
            onChange={handleInputChange}
          />
          <TextField
            required
            name="senha"
            label="Senha"
            type="password"
            placeholder="Senha"
            value={data.senha}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Entrar
          </Button>
        </FormGroup>
      </Paper>
    </div>
  );
}

export default LoginForm;