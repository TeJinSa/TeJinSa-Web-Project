import React from 'react';

export interface LoginObject {
  type: 'LOGIN';
  value: string;
}

export interface LogoutObject {
  type: 'LOGOUT';
}

export interface UserObject {
  isLogined: boolean;
  userId: string;
}

export interface UserContextObject {
  userState: {
    isLogined: boolean;
    userId: string;
  };
  userDispatch: React.Dispatch<LoginObject | LogoutObject>;
}
