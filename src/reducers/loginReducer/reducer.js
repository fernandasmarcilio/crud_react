import INITIAL_STATE from './initialState';
import ACTIONS from './actions';

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.login:
      return {
        ...state,
        loginData: action.payload,
      }
    default:
      return state
  }
}

export default loginReducer;