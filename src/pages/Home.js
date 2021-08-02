import React, { useEffect, useReducer, useState } from 'react';
import api from '../services/api';

import { INITIAL_STATE, ACTIONS, userReducer } from '../reducers/userReducer';

import Header from '../components/Header';
import Table from '../components/Table';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';

function Home() {
  const [state, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE,
  );

  const { users, filteredUsers, userData, usersHasModified } = state;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSearchUser = (event) => {
    const textToFilter = event.target.value.toUpperCase();
    dispatch({ type: ACTIONS.searchUser, payload: textToFilter });
  }

  const handleInputChange = (event) => {
    const { type, name, value, checked } = event.target;

    const data = {
      ...userData,
      [name]: type === 'checkbox' ? checked : value,
    };

    dispatch({ type: ACTIONS.setUserData, payload: data });
  }

  const handleGetUsers = () => {
    api.get('usuarios').then(response => {
      dispatch({ type: ACTIONS.setUsers, payload: response.data });
    })
  }

  const handlePostUser = () => {
    api.post('usuarios', userData).then(() => {
      handleGetUsers();
    });
    dispatch({ type: ACTIONS.usersHasModified, payload: true });
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    if (usersHasModified) {
      dispatch({ type: ACTIONS.resetUserData });
      handleOpenModal();
      dispatch({ type: ACTIONS.usersHasModified, payload: false });
    }
  }, [usersHasModified]);

  return (
    <>
      <Header
        title="Gerenciar usuários"
        inputPlaceholder="Buscar por usuário"
        user={{
          name: 'Machado de Assis',
          type: 'Admin'
        }}
        handleSearch={handleSearchUser}
      />
      <Table
        title="Usuários"
        data={filteredUsers || users}
        handleOpenModal={handleOpenModal}
      />
      <Modal
        title="Cadastro de usuário"
        open={openModal}
        handleConfirm={handlePostUser}
        handleClose={handleOpenModal}
        textPrimaryButton="Cadastrar"
      >
        <UserForm
          handleInputChange={handleInputChange}
          userData={userData}
        />
      </Modal>
    </>
  );
}

export default Home;
