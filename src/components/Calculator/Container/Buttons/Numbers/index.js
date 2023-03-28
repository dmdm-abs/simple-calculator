import React from 'react';
import NumberBtn from './NumberBtn';

const Numbers = (context) => {
	const { config: { numbers }} = context;

	return <div>
		{numbers.map((number, key) =>
			<NumberBtn key={ key } { ...{ ...context, data: number } }/>)}
	</div>;
};

export default Numbers;
