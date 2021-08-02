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
    if (!openModal) {
      dispatch({ type: ACTIONS.resetUserData });
    }
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

  const handleEditUser = ({ userId }) => {
    api.get(`usuarios/${userId}`).then(response => {
      dispatch({ type: ACTIONS.setUserData, payload: response.data });
    })
    handleOpenModal();
  };


  const handleDeleteUser = ({ userId }) => {
    api.delete(`usuarios/${userId}`).then(() => {
      handleGetUsers();
    })
  };


  const handleGetUsers = () => {
    api.get('usuarios').then(response => {
      dispatch({ type: ACTIONS.setUsers, payload: response.data });
    })
  }

  const handleUserData = () => {
    if (userData.id) {
      api.put(`usuarios/${userData.id}`, userData).then(() => {
        handleGetUsers();
      });
    } else {
      api.post('usuarios', userData).then(() => {
        handleGetUsers();
      });
    }

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
        handleEdit={handleEditUser}
        handleDelete={handleDeleteUser}
      />
      <Modal
        title="Cadastro de usuário"
        open={openModal}
        handleConfirm={handleUserData}
        handleClose={handleOpenModal}
        textPrimaryButton={userData.id ? "Editar" : "Cadastrar"}
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
