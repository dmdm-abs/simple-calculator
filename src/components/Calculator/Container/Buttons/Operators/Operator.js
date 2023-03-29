import React from 'react';
import CalcManager from '../../../../../services/CalcManager';

const Operator = (context) => {
	const { actions: { getResult }, data } = context;

	return (
		<button
			onClick={ () => (data === '='
				? getResult()
				: CalcManager.doOperations(context)) }
		>{data}</button>
	);
};

export default Operator;
