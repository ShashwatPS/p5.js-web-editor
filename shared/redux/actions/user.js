import * as ActionTypes from '../constants/constants'
import { browserHistory } from 'react-router'
import axios from 'axios'


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8000' : '/';

export function signUpUser(formValues) {
  const request = axios.post(`${ROOT_URL}/signup`, formValues);

  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, formValues)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}