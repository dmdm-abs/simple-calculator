const addOperand = ({ state: { operations }, data: number }) => {
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

const displayResult = ({ state: { operations: {
	firstOperand, secondOperand, operator,
}}}) => `${ firstOperand } ${ operator } ${ secondOperand }`;

const calcResult = ({ state: { operations, result }}) => {
	const { firstOperand, secondOperand } = operations;

	return secondOperand
		? eval(result)
		: firstOperand || '0';
};

const doOperations = (context) => {
	const { actions, data } = context;

	actions.setOperator(data);
	actions.displayResult();
};

const CalcManager = {
	addOperand,
	setOperator,
	displayResult,
	calcResult,
	doOperations,
};

export default CalcManager;
