import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('ua');
	const [numberOfNews, setNumberOfNews] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${process.env.REACT_APP_API_KEY_NEWSAPI}`
				);
				setArticles(response.data.articles);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchArticles();
	}, [selectedCountry]);

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

	return (
		<NewsContext.Provider
			value={{
				articles,
				selectedCountry,
				numberOfNews,
				searchTerm,
				loading,
				error,
				setSelectedCountry,
				handleLoadMore,
				handleSearch,
				filteredArticles,
			}}
		>
			{children}
		</NewsContext.Provider>
	);
};

export { NewsContext, NewsProvider };
