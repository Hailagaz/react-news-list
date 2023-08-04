// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import NewsList from './components/NewsList';

// const App = () => {
// 	return (
// 		<ChakraProvider>
// 			<NewsList />
// 		</ChakraProvider>
// 	);
// };

// export default App;






// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import NewsList from './components/NewsList';
// import About from './components/About';

// const App = () => {
// 	return (
// 		<ChakraProvider>
// 			<BrowserRouter>
// 				<Switch>
// 					<Route exact path="/" component={NewsList} />
// 					<Route exact path="/about" component={About} />
// 				</Switch>
// 			</BrowserRouter>
// 		</ChakraProvider>
// 	);
// };

// export default App;






// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import NewsList from './components/NewsList';
// import About from './components/About';

// const App = () => {
// 	return (
// 		<ChakraProvider>
// 			<Router>
// 				<Switch>
// 					<Route exact path="/" component={NewsList} />
// 					<Route path="/about" component={About} />
// 				</Switch>
// 			</Router>
// 		</ChakraProvider>
// 	);
// };

// export default App;









// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NewsList from './components/NewsList';
// import About from './components/About';
// import Projects from './components/Projects';

// const App = () => {
// 	return (
// 		<ChakraProvider>
// 			<Router>
// 				<Routes>
// 					<Route path="/" element={<NewsList />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/projects" element={<Projects />} />
// 				</Routes>
// 			</Router>
// 		</ChakraProvider>
// 	);
// };

// export default App;







// import React from 'react';
// import { ChakraProvider, CSSReset } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import NewsList from './components/NewsList';
// import About from './components/About';
// import Projects from './components/Projects';

// const App = () => {
// 	return (
// 		<ChakraProvider>
// 			<CSSReset />
// 			<Router>
// 				<NavBar />
// 				<Routes>
// 					<Route path="/" element={<NewsList />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/projects" element={<Projects />} />
// 				</Routes>
// 			</Router>
// 		</ChakraProvider>
// 	);
// };

// export default App;




import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NewsProvider } from './context/NewsContext';
import NavBar from './components/NavBar';
import NewsList from './components/NewsList';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
	return (
		<ChakraProvider>
			<NewsProvider>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<NewsList />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
				</Router>
			</NewsProvider>
		</ChakraProvider>
	);
};

export default App;
