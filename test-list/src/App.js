import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NewsProvider } from './context/NewsContext';
import NavBar from './components/NavBar';
import NewsList from './components/NewsList';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
	return (
		<ChakraProvider>
			<NewsProvider>
				<Router basename={process.env.REACT_APP_BASENAME || '/'}>
					<NavBar />
					<Box pt="64px">
						<Routes>
							<Route path="/" element={<NewsList />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Box>
				</Router>
				<ScrollToTopButton />
			</NewsProvider>
		</ChakraProvider>
	);
};

export default App;
