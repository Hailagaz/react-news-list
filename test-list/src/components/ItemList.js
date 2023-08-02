import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a8ef46bcbd0243e282955b6c1037277b')
			.then((response) => {
				setItems(response.data.articles);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div>
			<h1>News Headlines</h1>
			<ul>
				{items.map((item) => (
					<li key={item.title}>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemList;
