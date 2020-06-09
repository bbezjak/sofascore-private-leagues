import { User } from "..";

export enum UserActions {
  REMEMBER_USER = "REMEMBER_USER",
  INIT_USER = "INIT_USER",
  UPDATE_USER = "UPDATE_USER",
  CLEAN_USER = "CLEAN_USER",
}

export const rememberUser = () => ({
  type: UserActions.REMEMBER_USER
});

export const initUser = (dataReceived: any) => ({ 
  type: UserActions.INIT_USER, data: dataReceived
});

export const updateUser = (oldUser: User, newData: any) => ({ 
  type: UserActions.UPDATE_USER, data: {oldUser: oldUser, newData: newData}
});

export const cleanUser = () => ({
  type: UserActions.CLEAN_USER
});
