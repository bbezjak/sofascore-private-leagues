import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { ReduxState } from "../store";

export function ProtectedRoute({ children, ...routeProps }: any) {
  const { user } = useSelector((state: ReduxState) => state)

  return user.token ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
