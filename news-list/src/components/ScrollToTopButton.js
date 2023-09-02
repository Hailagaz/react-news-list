import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Box, IconButton } from '@chakra-ui/react';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<Box position="fixed" bottom="20px" right="20px">
			{isVisible && (
				<IconButton
					aria-label="Scroll to top"
					icon={<FaArrowCircleUp />}
					size="lg"
					colorScheme="blue"
					onClick={scrollToTop}
				/>
			)}
		</Box>
	);
};

export default ScrollToTopButton;
