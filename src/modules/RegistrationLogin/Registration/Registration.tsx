import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { ApiResponse, registerUser, loginUser } from "../../../api";
import { ErrorDiv } from "../../../components/ErrorDiv";
import { ReduxState } from "../../../store";
import { initUser, rememberUser } from "../../../model/user";
import { CraLikeMain } from "../../../utils";
import { LoginRegistrationInput, StyledRegistrationLoginModal, Form } from "../components";

import { Button } from "../../../components";

export function Registration() {
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

    setErrors({...errors, usernameError: _usernameError, passwordError: _passwordError});
    return _usernameError===false && _passwordError===false;
  }


  const fetchUser = async (e: FormEvent) => {
    e.preventDefault();

    
    if (!isFormValid()) {
      return;
    }

    await registerUser(username, password)
      .then(async (res) => {
        // const id = res.data;
        // user is registrated, now do login because registration does not return token
        await loginUser(username, password)
        .then(res => {
          dispatch(initUser(res.data));
          if (rememberMe) {
            dispatch(rememberUser());
          }}
        )
        .catch((err: ApiResponse) => {
          setErrors({...errors, fetchError:err.data});
        });
      })
      .catch((err: ApiResponse) => {
        setErrors({...errors, fetchError:err.data});
      });
  };

  return (
    <CraLikeMain>
      <StyledRegistrationLoginModal>
      {user.token && <Redirect to="/" />}
      <div id="login-modal" className="flex-container blue-item">
          <h2>Create account</h2>
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
            <Button type="submit">Register</Button>
          </Form>
          <a href="/login">I Have account</a>
        </div>
        {errors.fetchError && <ErrorDiv error={errors.fetchError} />}
    </StyledRegistrationLoginModal>
    </CraLikeMain>
  );
}