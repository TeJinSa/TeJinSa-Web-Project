import React from 'react';
import { LoginObject, LogoutObject, UserContextObject, UserObject } from '../types/userInterface';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const UserContext = React.createContext<UserContextObject>(null!);
UserContext.displayName = 'UserContext';

export const userContextReducer = (state: UserObject, action: LoginObject | LogoutObject) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogined: true,
        userId: action.value.userId,
        id: action.value.id,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogined: false,
        userId: '',
        id: -1,
      };
    default:
      throw new Error('잘못된 Action Type입니다.');
  }
};

export default UserContext;
