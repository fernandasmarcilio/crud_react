import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

function TableContent({data}) {
  const titleData = ['Usuário', 'Tipo de usuário', 'Usuário ativo'];

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {titleData.map((title, index) => (
            <TableCell key={title} align={index > 0 ? "right" : "left"}>{title}</TableCell>
          ))}
          <TableCell key="Ações" align="right">Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.map((row) => (
          <TableRow key={row.nome} hover>
            <TableCell component="th" scope="row">
              {`${row.nome} ${row.sobrenome}`}
            </TableCell>
            <TableCell align="right">{row.tipoUsuario}</TableCell>
            <TableCell align="right">{row.ativo ? "Sim" : "Não"}</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default TableContent;