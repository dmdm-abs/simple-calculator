import React from 'react';

const NumberBtn = (context) => {
	const { data: number } = context;

	return (
		<button>{number}</button>
	);
};

export default NumberBtn;
