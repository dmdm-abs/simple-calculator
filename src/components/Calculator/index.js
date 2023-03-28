import React from 'react';
import Title from './Title';
import Container from './Container';
const Calculator = (context) =>
	<div>
		<Title/>
		<Container { ...context }/>
	</div>;

export default Calculator;
