import React from 'react';

const Operator = ({ actions: { setOperator, getResult }, data: operator }) =>
	<button
		onClick={ () =>
			(operator === '=' ? getResult() : setOperator(operator)) }
	>{operator}</button>;

export default Operator;
