import React from 'react';
import Router from './router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from './mocks/worker'; 

if (process.env.NODE_ENV === 'development') worker.start();

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
};

export default App;
