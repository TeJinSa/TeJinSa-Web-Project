import React, { Dispatch } from 'react';

interface UserContextObject {
  isLogined: boolean;
  setIsLogined: Dispatch<boolean>;
  userId: string;
  setUserId: Dispatch<string>;
}

const UserContext = React.createContext<UserContextObject>(null!);

export default UserContext;
