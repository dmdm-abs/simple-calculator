import React from 'react';

const NumberBtn = ({ actions: { addNumber, setResult }, data: number }) =>
	<button onClick={ () => {
		addNumber(number);
		setResult();
	} }
	>{number}</button>;

export default NumberBtn;
