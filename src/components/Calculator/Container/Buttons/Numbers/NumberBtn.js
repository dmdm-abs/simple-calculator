import React from 'react';

const NumberBtn = ({ actions: { addNumber }, data: number }) =>
	<button onClick={ () => addNumber(number) }>{number}</button>;

export default NumberBtn;
