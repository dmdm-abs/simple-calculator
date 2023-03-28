import React from 'react';
import Display from './Display';
import Buttons from './Buttons';

const Container = (context) =>
	<div>
		<Display { ...context }/>
		<Buttons { ...context }/>
	</div>;

export default Container;
