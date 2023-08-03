import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NewsCard = ({ article }) => {
	return (
		<Box
			height="100%"
			maxWidth="600px"
			bg="white"
			boxShadow="md"
			rounded="md"
			p={4}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Text fontSize="lg" fontWeight="bold" mb={2}>
				{article.title}
			</Text>
			<Text fontSize="sm" color="gray.500">
				{article.description}
			</Text>
		</Box>
	);
};

export default NewsCard;
