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
    case ACTIONS.setUserData:
      return {
        ...state,
        userData: action.payload,
      }
    case ACTIONS.resetUserData:
      return {
        ...state,
        userData: INITIAL_STATE.userData,
      }
    case ACTIONS.usersHasModified:
      return {
        ...state,
        usersHasModified: action.payload,
      }
    default:
      return state
  }
}

export default userReducer;