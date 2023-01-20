import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './router/Router';
import worker from './mocks/worker';
import GlobalStyle from './global/global.style';
import GlobalContextProvider from './contexts';

if (process.env.NODE_ENV === 'development') worker.start();

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <GlobalStyle />
        <Router />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />}
      </GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
