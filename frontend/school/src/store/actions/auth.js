import axios from "axios";
import * as actionTypes from "./actiontypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token) => {
  console.log("authentication successful token",token)
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {   
        const token = res.data.key;
        console.log(token)
        localStorage.setItem("token", token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (username, email, password, confirm_password) => {
  return dispatch => {
    // dispatch(authStart())
    console.log('authenticatoin detail:', username, email, password, confirm_password);
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password,
        password2: confirm_password
      })
      .then(res => {
        console.log('authentication success')
        const token = res.data.key;
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        console.log('authentication error')
        dispatch(authFail(err))
      })
  };
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token))
        }
    }
}

