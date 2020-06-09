export enum UserActions {
  REMEMBER_USER = "REMEMBER_USER",
  INIT_USER = "INIT_USER",
  CLEAN_USER = "CLEAN_USER",
}

export const rememberUser = () => ({
  type: UserActions.REMEMBER_USER
});

export const initUser = (dataReceived: any) => ({ 
  type: UserActions.INIT_USER, data: dataReceived
});

export const cleanUser = () => ({
  type: UserActions.CLEAN_USER
});
