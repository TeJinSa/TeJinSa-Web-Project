import { useMemo, useState } from 'react';
import UserContext from './user';

const GlobalContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [userId, setUserId] = useState('');

  const userContextProviderValue = useMemo(
    () => ({
      isLogined,
      setIsLogined,
      userId,
      setUserId,
    }),
    [isLogined, userId]
  );

  return <UserContext.Provider value={userContextProviderValue}>{children}</UserContext.Provider>;
};
export default GlobalContextProvider;
