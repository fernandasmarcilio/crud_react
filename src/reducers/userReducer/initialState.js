const INITIAL_STATE = {
  users: null,
  filteredUsers: null,
  usersHasModified: false,
  userData: {
    ativo: false,
    tipoUsuario: "Administrador",
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  },
  user: {
    ativo: false,
    tipoUsuario: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  },
  userIsAdmin: false,
};

export default INITIAL_STATE;