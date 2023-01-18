import { useMemo, useReducer } from 'react';
import UserContext, { userContextReducer } from './user';

const initValue = {
  isLogined: false,
  userId: '',
};

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userContext, dispatchUserContext] = useReducer(userContextReducer, initValue);
  const value = useMemo(() => ({ userState: userContext, userDispatch: dispatchUserContext }), [userContext]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default GlobalContextProvider;
