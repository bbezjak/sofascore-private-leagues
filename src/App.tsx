import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { checkToken } from "./api";
import { Login } from "./modules/RegistrationLogin/Login/Login";
import { ReduxState } from "./store";
import { ProtectedRoute } from "./components";
import { UserPage } from "./modules/User/UserPage";
import { HomePage } from "./modules/Home/HomePage";
import { url } from "inspector";
import { cleanUser } from "./model/user/redux/userActions";
import { store, persistor } from "./store";

import "./App.css";
import { GlobalStyles } from "./utils/styles";
import { Registration } from "./modules/RegistrationLogin/Registration/Registration";
import { Users } from "./modules/Users/Users";
import { LeaguePage } from "./modules/League";
import { EventPage } from "./modules/Event";

/*
  TODO 
    Themes - https://stackoverflow.com/questions/42796584/dynamic-theme-in-styled-components
*/

function App() {

  return (
    <>
    <div id={"root-modal"}></div>
    <div id={"error-modal"}></div>
    <GlobalStyles />
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

function Routes() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: ReduxState) => state);

  async function validateUserToken() {
    let f5 = false;
    if (window.performance.navigation.type === 1) {
      f5 = true;
    }

    if(f5) {
      return;
    }

    if (user.token && user.rememberMe !== undefined) {
      checkToken(user.token).catch(() => dispatch(cleanUser()));
    } else {
      dispatch(cleanUser());
    }
  }

  useEffect(() => {
    validateUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registration">
        <Registration/>
      </Route>
      <ProtectedRoute exact path="/">
        <HomePage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/user/me">
        <UserPage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/users">
        <Users />
      </ProtectedRoute>
      <ProtectedRoute exact path="/league/:id">
        <LeaguePage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/league/:leagueId/events/:eventId">
        <EventPage />
      </ProtectedRoute>
      <Route path="*">
        <h1>404 - page not found</h1>
      </Route>
    </Switch>
  );
}

export default App;
