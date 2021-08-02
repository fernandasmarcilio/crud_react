import INITIAL_STATE from './initialState';
import ACTIONS from './actions';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.setUsers:
      return {
        ...state,
        users: action.payload,
      }
    case ACTIONS.searchUser:
      const filteredUserArray = state.users.filter(user => {
        const userName = `${user.nome} ${user.sobrenome}`.toUpperCase();
        return userName.includes(action.payload);
      })
      return {
        ...state,
        filteredUsers: filteredUserArray,
      }
    default:
      return state
  }
}

export default userReducer;