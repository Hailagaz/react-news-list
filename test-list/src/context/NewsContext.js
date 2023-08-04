import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	const [numberOfNews, setNumberOfNews] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					`https://gnews.io/api/v4/top-headlines?country=ua&category=general&apikey=${process.env.REACT_APP_API_KEY_GNEWS}`
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

	return (
		<NewsContext.Provider
			value={{
				articles,
				numberOfNews,
				searchTerm,
				loading,
				error,
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
