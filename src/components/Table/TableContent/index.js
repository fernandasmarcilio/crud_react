import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

function TableContent({ data, handleEdit, handleDelete }) {
  const titleData = ['Usuário', 'Tipo de usuário', 'Usuário ativo'];

  const RenderActions = (userId) => (
    <>
      <IconButton
        onClick={() => handleEdit(userId)}
      >
        <Edit fontSize="small" />
      </IconButton>
      <IconButton
        onClick={() => handleDelete(userId)}
      >
        <Delete fontSize="small" />
      </IconButton>
    </>
  );

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
          {data && data.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell component="th" scope="row">
                {`${user.nome} ${user.sobrenome}`}
              </TableCell>
              <TableCell align="right">{user.tipoUsuario}</TableCell>
              <TableCell align="right">{user.ativo ? "Sim" : "Não"}</TableCell>
              <TableCell align="right">
                <RenderActions userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContent;