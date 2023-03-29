import React from 'react';

const NumberBtn = ({ actions: { addOperand, setResult }, data: number }) =>
	<button onClick={ () => {
		addOperand(number);
		setResult();
	} }
	>{number}</button>;

export default NumberBtn;
