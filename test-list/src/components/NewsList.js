// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { SimpleGrid } from '@chakra-ui/react';
// import NewsCard from './NewsCard';

// const NewsList = () => {
// 	const [articles, setArticles] = useState([]);

// 	useEffect(() => {
// 		const fetchArticles = async () => {
// 			try {
// 				const response = await axios.get(
// 					'https://newsapi.org/v2/top-headlines?country=ua&apiKey=a8ef46bcbd0243e282955b6c1037277b'
// 				);
// 				setArticles(response.data.articles);
// 			} catch (error) {
// 				console.error('Error fetching articles:', error);
// 			}
// 		};

// 		fetchArticles();
// 	}, []);

// 	return (
// 		<SimpleGrid columns={{ sm: 1 }} spacing={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
// 			{articles.map((article) => (
// 				<NewsCard key={article.title} article={article} />
// 			))}
// 		</SimpleGrid>
// 	);
// };

// export default NewsList;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { SimpleGrid, Button, Heading } from '@chakra-ui/react';
// import NewsCard from './NewsCard';

// const NewsList = () => {
// 	const [articles, setArticles] = useState([]);
// 	const [numberOfNews, setNumberOfNews] = useState(10);

// 	useEffect(() => {
// 		const fetchArticles = async () => {
// 			try {
// 				const pageSize = 100; // Set the desired number of articles per request
// 				const response = await axios.get(
// 					`https://newsapi.org/v2/top-headlines?country=ua&pageSize=${pageSize}&apiKey=a8ef46bcbd0243e282955b6c1037277b`
// 				);
// 				setArticles(response.data.articles);
// 			} catch (error) {
// 				console.error('Error fetching articles:', error);
// 			}
// 		};

// 		fetchArticles();
// 	}, []);

// 	const handleLoadMore = () => {
// 		setNumberOfNews((prevNumberOfNews) => prevNumberOfNews + 10);
// 	};

// 	return (
// 		<SimpleGrid
// 			columns={{ sm: 1 }}
// 			spacing={4}
// 			display="flex"
// 			flexDirection="column"
// 			justifyContent="center"
// 			alignItems="center"
// 		>
// 			<Heading as="h1" size="xl" m={4}>
// 				News List
// 			</Heading>
// 			{articles.slice(0, numberOfNews).map((article) => (
// 				<NewsCard key={article.title} article={article} />
// 			))}
// 			{numberOfNews < articles.length && (
// 				<Button onClick={handleLoadMore} colorScheme="blue" size="lg" mb={4}>
// 					Load More
// 				</Button>
// 			)}
// 		</SimpleGrid>
// 	);
// };

// export default NewsList;








// NewsList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid, Button, Heading, Select } from '@chakra-ui/react';
import NewsCard from './NewsCard';

const NewsList = () => {
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('us');
	const [numberOfNews, setNumberOfNews] = useState(10);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=a8ef46bcbd0243e282955b6c1037277b`
				);
				setArticles(response.data.articles);
			} catch (error) {
				console.error('Error fetching articles:', error);
			}
		};

		fetchArticles();
	}, [selectedCountry]);

	const handleLoadMore = () => {
		setNumberOfNews((prev) => prev + 10);
	};

	return (
		<SimpleGrid
			columns={{ sm: 1 }}
			spacing={4}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Heading as="h1" size="xl" mb={4}>
				News List
			</Heading>
			<Select
				value={selectedCountry}
				onChange={(e) => setSelectedCountry(e.target.value)}
				mx={4}
				maxWidth="600px"
				bg="white"
				boxShadow="md"
				rounded="md"
			>
				<option value="us">USA</option>
				<option value="ua">Ukraine</option>
				<option value="pl">Poland</option>
				<option value="de">Germany</option>
				<option value="fr">France</option>
			</Select>
			{articles.slice(0, numberOfNews).map((article) => (
				<NewsCard key={article.title} article={article} />
			))}
			{articles.length > numberOfNews && (
				<Button onClick={handleLoadMore} colorScheme="blue" size="lg" mb={4}>
					Load More
				</Button>
			)}
		</SimpleGrid>
	);
};

export default NewsList;
