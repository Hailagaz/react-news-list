import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const NewsCard = ({ article }) => {
	return (
		<Link href={article.url} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
			<Box
				height="100%"
				maxWidth="600px"
				bg="white"
				boxShadow="md"
				rounded="md"
				p={4}
				mx={4}
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				transition="all 0.3s ease"
				_hover={{ boxShadow: 'lg', transform: 'scale(1.05)', cursor: 'pointer', bg: 'blue.100' }}
			>
				<Text fontSize="lg" fontWeight="bold" mb={2}>
					{article.title}
				</Text>
				<Text fontSize="sm" color="gray.700">
					{article.description}
				</Text>
			</Box>
		</Link>
	);
};

export default NewsCard;
