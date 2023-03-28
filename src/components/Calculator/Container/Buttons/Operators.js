import React from 'react';

const Operators = (context) => {
	const { state: { operators }} = context;

	return <div>
		{operators.map((operator, key) =>
			<button
				key={ key }
			>{operator}</button>)}
	</div>;
};

export default Operators;
