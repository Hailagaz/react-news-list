import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NewsProvider } from './context/NewsContext';
import NavBar from './components/NavBar';
import NewsList from './components/NewsList';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
	return (
		<ChakraProvider>
			<NewsProvider>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<NewsList />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
			</NewsProvider>
		</ChakraProvider>
	);
};

export default App;
