import React from 'react';
import Operator from './Operator';

const Operators = (context) => {
	const { config: { operators }} = context;

	return <div>
		{operators.map((operator, key) =>
			<Operator key={ key } { ...{ ...context, data: { operator }} }/>)}
	</div>;
};

export default Operators;
