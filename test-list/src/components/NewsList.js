import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid, Button, Heading, Input, Box, Select } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import { NewsContext } from '../context/NewsContext';

const NewsList = () => {
	const {
		articles: initialArticles,
		numberOfNews,
		searchTerm,
		loading,
		error,
		handleLoadMore,
		handleSearch,
	} = useContext(NewsContext);

	const [articles, setArticles] = useState(initialArticles);
	const [selectedCountry, setSelectedCountry] = useState('ua');

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					`https://gnews.io/api/v4/top-headlines?country=${selectedCountry}&category=general&apikey=${process.env.REACT_APP_API_KEY_GNEWS}`
				);
				setArticles(response.data.articles);
			} catch (error) {
				setArticles([]);
			}
		};

		fetchArticles();
	}, [selectedCountry]);

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

	const countries = [
		{ value: 'ua', label: 'Ukraine' },
		{ value: 'us', label: 'USA' },
		{ value: 'gb', label: 'United Kingdom' },
	];

	return (
		<SimpleGrid columns={{ sm: 1 }} spacing={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Heading as="h1" size="xl" my={4}>
				Top Headlines News
			</Heading>
			<Select
				value={selectedCountry}
				onChange={(e) => setSelectedCountry(e.target.value)}
				maxWidth="600px"
				bg="white"
				boxShadow="md"
				rounded="md"
				mb={4}
			>
				{countries.map((country) => (
					<option key={country.value} value={country.value}>
						{country.label}
					</option>
				))}
			</Select>
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
