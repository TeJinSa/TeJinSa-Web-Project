import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './router/Router';
import worker from './mocks/worker';
import GlobalStyle from './global/global.style';
import UserContext from './context/user';

if (process.env.NODE_ENV === 'development') worker.start();

const queryClient = new QueryClient();

const initUserState = {
  isLogined: false,
  setIsLogined: () => {},
  userId: '',
  setUserId: () => {},
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={initUserState}>
        <GlobalStyle />
        <Router />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />}
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
