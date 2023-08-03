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









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { SimpleGrid, Button, Heading, Select } from '@chakra-ui/react';
// import NewsCard from './NewsCard';

// const NewsList = () => {
// 	const [articles, setArticles] = useState([]);
// 	const [selectedCountry, setSelectedCountry] = useState('ua');
// 	const [numberOfNews, setNumberOfNews] = useState(10);

// 	useEffect(() => {
// 		const fetchArticles = async () => {
// 			try {
// 				const response = await axios.get(
// 					`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=a8ef46bcbd0243e282955b6c1037277b`
// 				);
// 				setArticles(response.data.articles);
// 			} catch (error) {
// 				console.error('Error fetching articles:', error);
// 			}
// 		};

// 		fetchArticles();
// 	}, [selectedCountry]);

// 	const handleLoadMore = () => {
// 		setNumberOfNews((prev) => prev + 10);
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
// 			<Heading as="h1" size="xl" my={4}>
// 				News List
// 			</Heading>
// 			<Select
// 				value={selectedCountry}
// 				onChange={(e) => setSelectedCountry(e.target.value)}
// 				mx={4}
// 				maxWidth="600px"
// 				bg="white"
// 				boxShadow="md"
// 				rounded="md"
// 			>
// 				<option value="ua">Ukraine</option>
// 				<option value="us">USA</option>
// 			</Select>
// 			{articles.slice(0, numberOfNews).map((article) => (
// 				<NewsCard key={article.title} article={article} />
// 			))}
// 			{articles.length > numberOfNews && (
// 				<Button onClick={handleLoadMore} colorScheme="blue" size="lg" mb={4}>
// 					Load More
// 				</Button>
// 			)}
// 		</SimpleGrid>
// 	);
// };

// export default NewsList;





//`https://newsapi.org/v2/top-headlines?country=ua&apiKey=a8ef46bcbd0243e282955b6c1037277b`
//'https://gnews.io/api/v4/top-headlines?country=ua&category=general&apikey=39c41a9ee684ec67a1ec007731d2131e'



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid, Button, Heading, Input, Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';

const NewsList = () => {
	const [articles, setArticles] = useState([]);
	const [numberOfNews, setNumberOfNews] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					'https://gnews.io/api/v4/top-headlines?country=ua&category=general&apikey=39c41a9ee684ec67a1ec007731d2131e'
				);
				setArticles(response.data.articles);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchArticles();
	}, []);

	const handleLoadMore = () => {
		setNumberOfNews((prev) => prev + 10);
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		setNumberOfNews(10);
	};

	const filteredArticles = articles.filter(
		(article) =>
			article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			article.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error}</Box>;
	}

	return (
		<SimpleGrid
			columns={{ sm: 1 }}
			spacing={4}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Heading as="h1" size="xl" my={4}>
				News List
			</Heading>
			<Input
				type="text"
				placeholder="Search by title or description"
				value={searchTerm}
				onChange={handleSearch}
				maxWidth="600px"
				bg="white"
				boxShadow="md"
				rounded="md"
				mb={4}
			/>
			{filteredArticles.slice(0, numberOfNews).map((article) => (
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
