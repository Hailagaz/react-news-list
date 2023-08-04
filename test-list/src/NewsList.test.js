// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import NewsList from '../components/NewsList';


// test('renders NewsList component', () => {
// 	render(<NewsList />);
// 	const headingElement = screen.getByText(/News List/i);
// 	expect(headingElement).toBeInTheDocument();
// });



import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import NewsList from './components/NewsList';

jest.mock('axios', () => ({
	get: jest.fn(() =>
		Promise.resolve({
			data: {
				articles: [
					{
						title: 'Test News 1',
						description: 'This is a test news article 1.',
						url: 'https://example.com/test-news-1',
					},
					{
						title: 'Test News 2',
						description: 'This is a test news article 2.',
						url: 'https://example.com/test-news-2',
					},
				],
			},
		})
	),
}));

test('renders NewsList component', async () => {
	render(<NewsList />);
	const headingElement = screen.getByText(/News List/i);
	expect(headingElement).toBeInTheDocument();

	// Wait for the initial API call to complete
	await waitFor(() => expect(axios.get).toHaveBeenCalled());

	// Check if the test articles are rendered on the screen
	const testArticle1 = screen.getByText(/Test News 1/i);
	const testArticle2 = screen.getByText(/Test News 2/i);
	expect(testArticle1).toBeInTheDocument();
	expect(testArticle2).toBeInTheDocument();
});
