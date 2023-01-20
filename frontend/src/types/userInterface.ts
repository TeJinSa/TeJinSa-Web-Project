import React from 'react';

export interface LoginObject {
  type: 'LOGIN';
  value: {
    userId: string;
    id: number;
  };
}

export interface LogoutObject {
  type: 'LOGOUT';
}

export interface UserObject {
  isLogined: boolean;
  userId: string;
  id: number;
}

export interface UserContextObject {
  userState: {
    isLogined: boolean;
    userId: string;
    id: number;
  };
  userDispatch: React.Dispatch<LoginObject | LogoutObject>;
}
