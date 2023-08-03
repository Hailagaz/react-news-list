import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid } from '@chakra-ui/react';
import NewsCard from './NewsCard';

const NewsList = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8ef46bcbd0243e282955b6c1037277b'
				);
				setArticles(response.data.articles);
			} catch (error) {
				console.error('Error fetching articles:', error);
			}
		};

		fetchArticles();
	}, []);

	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
			{articles.map((article) => (
				<NewsCard key={article.title} article={article} />
			))}
		</SimpleGrid>
	);
};

export default NewsList;
