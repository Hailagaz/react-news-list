import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsList from '../components/NewsList';


test('renders NewsList component', () => {
	render(<NewsList />);
	const headingElement = screen.getByText(/News List/i);
	expect(headingElement).toBeInTheDocument();
});

