import React from 'react';
import CalcManager from '../../../../../services/CalcManager';

const Operator = (context) => {
	const { actions: { calcResult }, data } = context;

	return (
		<button
			onClick={ () => (data === '='
				? calcResult()
				: CalcManager.doOperations(context)) }
		>{data}</button>
	);
};

export default Operator;
