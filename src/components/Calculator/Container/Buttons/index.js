import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';

const index = (context) =>
	<div>
		<Numbers { ...context }/>
		<Operators { ...context }/>
	</div>;

export default index;
