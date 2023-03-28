import React from 'react';

const Operator = (context) => {
	const { data: { operator }} = context;

	return (
		<button>{operator}</button>
	);
};

export default Operator;
