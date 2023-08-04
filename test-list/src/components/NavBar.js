// import React from 'react';
// import { Box, Link, Flex, Heading, Center } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';

// const NavBar = () => {
// 	const linkStyles = {
// 		color: 'white',
// 		marginRight: '1rem',
// 		textDecoration: 'none',
// 		_hover: {
// 			transform: 'scale(1.05)',
// 			color: 'yellow.400',
// 		},
// 	};

// 	return (
// 		<Box bg="blue.500" px={4} py={3}>
// 			<Center>
// 				<Flex align="center" justify="space-between" maxWidth="600px" width="100%">
// 					<Heading as={RouterLink} to="/" size="md" color="white" _hover={{ textDecoration: 'none' }}>
// 						News App
// 					</Heading>
// 					<Link as={RouterLink} to="/" {...linkStyles}>
// 						Home
// 					</Link>
// 					<Link as={RouterLink} to="/about" {...linkStyles}>
// 						About
// 					</Link>
// 					<Link as={RouterLink} to="/contact" {...linkStyles}>
// 						Contact
// 					</Link>
// 				</Flex>
// 			</Center>
// 		</Box>
// 	);
// };

// export default NavBar;





import React from 'react';
import { Box, Link, Flex, Heading, Center } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
	const linkStyles = {
		color: 'white',
		marginRight: '1rem',
		textDecoration: 'none',
		_hover: {
			transform: 'scale(1.05)',
			color: 'yellow.400',
			textDecoration: 'none',
		},
	};

	return (
		<Box bg="blue.500" px={4} py={3} position="fixed" top="0" left="0" right="0" zIndex="999">
			<Center>
				<Flex align="center" justify="space-between" maxWidth="600px" width="100%">
					<Heading as={RouterLink} to="/" size="md" color="white" _hover={{ textDecoration: 'none' }}>
						News App
					</Heading>
					<Link as={RouterLink} to="/" {...linkStyles}>
						Home
					</Link>
					<Link as={RouterLink} to="/about" {...linkStyles}>
						About
					</Link>
					<Link as={RouterLink} to="/contact" {...linkStyles}>
						Contact
					</Link>
				</Flex>
			</Center>
		</Box>
	);
};

export default NavBar;
