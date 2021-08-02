import React, { useEffect, useReducer } from 'react';
import api from '../services/api';

import { INITIAL_STATE, ACTIONS, userReducer } from '../reducers/userReducer';

import Header from '../components/Header';
import Table from '../components/Table';

function Home() {
  const [state, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE,
  );

  const { users, filteredUsers } = state;

  const handleSearchUser = (event) => {
    const textToFilter = event.target.value.toUpperCase();
    dispatch({ type: ACTIONS.searchUser, payload: textToFilter });
  }

  useEffect(() => {
    api.get('usuarios').then(response => {
      dispatch({ type: ACTIONS.setUsers, payload: response.data });
    })
  }, []);

  return (
    <>
      <Header
        title="Gerenciar usuários"
        inputPlaceholder="Buscar por usuário"
        user={{
          name: 'Machado de Assis',
          type: 'Admin'
        }}
        searchOnChange={handleSearchUser}
      />
      <Table
        title="Usuários"
        data={filteredUsers || users}
      />
    </>
  );
}

export default Home;
