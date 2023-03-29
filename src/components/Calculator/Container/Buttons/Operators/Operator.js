import React from 'react';

const Operator = ({ actions: { setOperator }, data: operator }) =>
	<button
		onClick={ () => operator !== '=' && setOperator(operator) }
	>{operator}</button>;

export default Operator;
