import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import Input from "../components/Input/Input";

import { loginUser, ApiResponse } from "../../../api";
import { ErrorDiv } from "../../../components";
import { ReduxState } from "../../../store";
import { initUser, rememberUser } from "../../../model/user";
import { CraLikeMain } from "../../../utils";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const initialErrors = {
    usernameError: false,
    passwordError: false,
    fetchError: undefined
  }
  const [errors, setErrors] = useState(initialErrors);

  const dispatch = useDispatch();
  const { user } = useSelector((state: ReduxState) => state); //da imam state.user islo bi bez {}
  function isFormValid() {

    setErrors(initialErrors)

    let _usernameError = false;
    let _passwordError = false;

    if (username === "") {
      _usernameError = true;
    }

    if (password === "") {
      _passwordError = true;
    }

    setErrors({...errors, usernameError: _usernameError, passwordError: _passwordError, fetchError:undefined});
    return _usernameError===false && _passwordError===false;
  }

  const fetchUser = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    await loginUser(username, password)
      .then((res) => {
        dispatch(initUser(res.data));
        if (rememberMe) {
          dispatch(rememberUser());
        }
      })
      .catch((err: ApiResponse) => {
        setErrors({...errors, fetchError:err.data});
      });
  };

  function handleChecked() {
    setRememberMe(!rememberMe);
  }

  return (
    <CraLikeMain>
    <StyledLogin>
      {user.token && <Redirect to="/" />}
      <div id="login-modal" className="flex-container blue-item">
          <h1>Log in</h1>
          <form onSubmit={fetchUser}>
            <Input
              label="Username"
              type="text"
              onChange={(e: any) => setUsername(e.target.value)}
              placeholder="Your Username"
              displayError={errors.usernameError}
              errorMessage="Please provide username"
            />
            <Input
              label="Password"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Your Password"
              displayError={errors.passwordError}
              errorMessage="Please provide password"
            />
            <div className="flex-container">
              <button type="submit">Login</button>
              <div>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleChecked}
                />
                <label>Remember me</label>
                <a href="/registration">Create account</a>
              </div>
            </div>
          </form>
          {errors.fetchError && <ErrorDiv error={errors.fetchError}/>}
        </div>
    </StyledLogin>
    </CraLikeMain>
  );
}

const StyledLogin = styled.div`
/*background-image: url(https://images4.alphacoders.com/284/thumb-1920-284804.jpg);*/
/*background-image: url(https://wallpaperaccess.com/full/552032.jpg);*/
//background-image: url(https://observatoriocomunicacionviolencia.org/l/2019/12/wallpaper-kobe-bryant-basketball-nba-lakers-7-los-angeles-cool-wallpapers-schedule-tonight-all-star-game-brooklyn-nets-ichiro-suzuki-jaelen-strong-ben-simmons-and-joel-embiid-live-black-box.jpg);
display: flex;
flex-direction: column;
justify-content: space-around;
margin: auto;

#login-modal {
  border-radius: 15px;
  margin: 0 5px;
  min-width: 310px;
  max-width: 415px;
  height: 50vh;
  min-height: fit-content;
  display: flex;
  flex-direction:column;
  justify-content:space-beetwen;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.blue-item {
  background-color: rgba(25, 25, 112, 0.5);
}

button {
  border: none;
  width: 50%;
  align-self: center;
  margin-top: 10px;
}

input {
  border: none;
}

h1 {
  margin-top: 0;
  align-self: flex-start;
}

button {
  background-color: tomato;
  color: white;
  border-radius: 15px;
  height: 30px;
  margin-bottom: 10px;
}
`