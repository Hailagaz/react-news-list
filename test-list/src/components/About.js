import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const About = () => {
	return (
		<Box height="100vh" display="flex" justifyContent="center" alignItems="center">
			<Heading as="h2" size="xl">
				About page. Testing React Router
			</Heading>
		</Box>
	);

};

export default About;
