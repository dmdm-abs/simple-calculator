const addNumber = ({ state: { operations }, data: number }) => {
	const { operator } = operations;
	const operand = operator ? 'secondOperand' : 'firstOperand';

	return {
		...operations,
		[operand]: operations[operand].concat(number),
	};
};

const setOperator = ({ state: { operations }, data }) => {
	const { firstOperand } = operations;

	const firstOperandValue = firstOperand || '0';

	return {
		...operations,
		firstOperand: firstOperandValue,
		operator: data,
	};
};

const getResult = ({ state: { operations }}) => {
	const { firstOperand, secondOperand, operator } = operations;

	const result = secondOperand
		? eval(`${ firstOperand } ${ operator } ${ secondOperand }`)
		: firstOperand;

	return result;
};

const CalcManager = {
	addNumber,
	setOperator,
	getResult,
};

export default CalcManager;
