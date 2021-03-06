import React from 'react';
import { Toolbar, Typography, Button, Box } from '@material-ui/core';

import useStyles from '../styles';

function TableHeader({ title, handleOpenModal }) {
  const classes = useStyles();

  return (
    <Box boxShadow={1} >
      <Toolbar className={classes.tableHeader}>
        <Typography variant="body1" className={classes.tableTitle}>
          {title}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Cadastrar
        </Button>
      </Toolbar>
    </Box>
  );
}

export default TableHeader;