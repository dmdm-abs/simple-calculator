const addOperand = ({ state: { operations }, data: number }) => {
	const { operator } = operations;
	const operand = operator ? 'secondOperand' : 'firstOperand';

	return {
		...operations,
		// eslint-disable-next-line no-magic-numbers
		[operand]: operations[operand] * 10 + number,
	};
};

const setOperator = ({ state: { operations }, data }) => ({
	...operations,
	operator: data,
});

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
		: firstOperand;
};

const updateOperations = (context) => {
	const { seed: { operations }} = context;

	return {
		...operations,
		firstOperand: calcResult(context),
	};
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
	updateOperations,
	doOperations,
};

export default CalcManager;
