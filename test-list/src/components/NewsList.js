import React, { useContext } from 'react';
import { SimpleGrid, Button, Heading, Input, Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import { NewsContext } from '../context/NewsContext';

const NewsList = () => {
	const {
		articles,
		numberOfNews,
		searchTerm,
		loading,
		error,
		handleLoadMore,
		handleSearch,
		filteredArticles,
	} = useContext(NewsContext);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error}</Box>;
	}

	return (
		<SimpleGrid columns={{ sm: 1 }} spacing={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
