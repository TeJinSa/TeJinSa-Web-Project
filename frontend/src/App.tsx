import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './router/Router';
import worker from './mocks/worker';
import GlobalStyle from './global/global.style';

if (process.env.NODE_ENV === 'development') worker.start();

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<Router />
		</QueryClientProvider>
	);
};

export default App;
