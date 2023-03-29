import React from 'react';

const NumberBtn = ({ actions: { addOperand, displayResult }, data: number }) =>
	<button onClick={ () => {
		addOperand(Number(number));
		displayResult();
	} }
	>{number}</button>;

export default NumberBtn;
