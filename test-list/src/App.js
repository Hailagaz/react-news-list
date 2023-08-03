import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NewsList from './components/NewsList';

const App = () => {
	return (
		<ChakraProvider>
			<NewsList />
		</ChakraProvider>
	);
};

export default App;
