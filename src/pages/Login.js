import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
import { login } from '../services/auth';

import { INITIAL_STATE, ACTIONS, loginReducer } from '../reducers/loginReducer';

import LoginForm from '../components/LoginForm';

function Login() {
  const history = useHistory();

  const [state, dispatch] = useReducer(
    loginReducer,
    INITIAL_STATE,
  );

  const { loginData } = state;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const data = {
      ...loginData,
      [name]: value,
    };

    dispatch({ type: ACTIONS.login, payload: data });
  }

  const handleLogin = () => {
    api.get(`usuarios?email=${loginData.email}&senha=${loginData.senha}`)
      .then(response => {
        const responseData = response.data;
        if (responseData.length > 0) {
          const { id } = responseData[0];
          login(id);
          history.push("/");
        }
      })
  };

  return (
    <LoginForm
      data={loginData}
      handleInputChange={handleInputChange}
      handleLogin={handleLogin}
    />
  );
}

export default Login;