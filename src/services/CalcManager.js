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

const calculations = {
	'+': (firstOperand, secondOperand) => firstOperand + secondOperand,
	'-': (firstOperand, secondOperand) => firstOperand - secondOperand,
	'*': (firstOperand, secondOperand) => firstOperand * secondOperand,
	'/': (firstOperand, secondOperand) => firstOperand / secondOperand,
};

const calcResult = ({ state: { operations }}) => {
	const { firstOperand, secondOperand, operator } = operations;

	return secondOperand
		? calculations[operator](Number(firstOperand), Number(secondOperand))
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
