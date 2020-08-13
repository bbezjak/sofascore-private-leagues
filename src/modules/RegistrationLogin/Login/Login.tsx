import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser, ApiResponse } from "../../../api";
import { ErrorDiv, Checkbox, Button } from "../../../components";
import { ReduxState } from "../../../store";
import { initUser, rememberUser } from "../../../model/user";
import { CraLikeMain } from "../../../utils";
import { LoginRegistrationInput } from "../components/LoginRegistrationInput/LoginRegistrationInput";
import { StyledRegistrationLoginModal, Form } from "../components";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const initialErrors = {
    usernameError: false,
    passwordError: false,
    fetchError: undefined,
  };
  const [errors, setErrors] = useState(initialErrors);

  const dispatch = useDispatch();
  const { user } = useSelector((state: ReduxState) => state); //da imam state.user islo bi bez {}

  function isFormValid() {
    setErrors(initialErrors);
    let _usernameError = false;
    let _passwordError = false;

    if (username === "") {
      _usernameError = true;
    }
    if (password === "") {
      _passwordError = true;
    }

    setErrors({
      ...errors,
      usernameError: _usernameError,
      passwordError: _passwordError,
      fetchError: undefined,
    });

    return _usernameError === false && _passwordError === false;
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
        setErrors({ ...errors, fetchError: err.data });
      });
  };

  function handleChecked() {
    setRememberMe(!rememberMe);
  }

  return (
    <CraLikeMain>
      <StyledRegistrationLoginModal>
        {user.token && <Redirect to="/" />}
        <h2>Log in</h2>
        <Form onSubmit={fetchUser}>
          <LoginRegistrationInput
            label="Username"
            type="text"
            onChange={(e: any) => setUsername(e.target.value)}
            placeholder="Your Username"
            displayError={errors.usernameError}
            errorMessage="Please provide username"
          />
          <LoginRegistrationInput
            label="Password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Your Password"
            displayError={errors.passwordError}
            errorMessage="Please provide password"
          />
          <div style={{ alignSelf: "flex-start" }}>
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onChange={handleChecked}
              label={"remember me"}
            />
          </div>
          <Button type="submit">Login</Button>
          <div>
            <a href="/registration">Create account</a>
          </div>
        </Form>
        <ErrorDiv error={errors.fetchError} style={{"borderRadius": "0 0 15px 15px"}}/>
      </StyledRegistrationLoginModal>
    </CraLikeMain>
  );
}
