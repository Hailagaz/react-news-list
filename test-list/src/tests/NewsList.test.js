import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsList from '../components/NewsList';


test('renders NewsList component', () => {
	render(<NewsList />);
	const headingElement = screen.getByText(/News List/i);
	expect(headingElement).toBeInTheDocument();
});


// test('renders news articles', async () => {
// 	// Mock the axios API call with sample data
// 	jest.mock('axios', () => ({
// 		get: jest.fn().mockResolvedValue({
// 			data: {
// 				articles: [
// 					{ title: 'Article 1', description: 'Description 1' },
// 					{ title: 'Article 2', description: 'Description 2' },
// 					// Add more articles as needed for testing
// 				],
// 			},
// 		}),
// 	}));

// 	render(<NewsList />);

// 	// Check if news articles are rendered correctly
// 	expect(await screen.findByText(/Article 1/i)).toBeInTheDocument();
// 	expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
// 	expect(await screen.findByText(/Article 2/i)).toBeInTheDocument();
// 	expect(screen.getByText(/Description 2/i)).toBeInTheDocument();
// });

// test('shows "Load More" button', async () => {
// 	// Mock the axios API call with sample data
// 	jest.mock('axios', () => ({
// 		get: jest.fn().mockResolvedValue({
// 			data: {
// 				articles: [
// 					{ title: 'Article 1', description: 'Description 1' },
// 					{ title: 'Article 2', description: 'Description 2' },
// 					// Add more articles as needed for testing
// 				],
// 			},
// 		}),
// 	}));

// 	render(<NewsList />);

// 	// Check if the "Load More" button is rendered
// 	expect(await screen.findByText(/Load More/i)).toBeInTheDocument();
// });
