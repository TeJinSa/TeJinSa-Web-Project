import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './router/Router';
import worker from './mocks/worker';

if (process.env.NODE_ENV === 'development') worker.start();

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />}
    </QueryClientProvider>
  );
};

export default App;
