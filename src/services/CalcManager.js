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

const setResult = ({ state: { operations }}) => {
	const { firstOperand, secondOperand, operator } = operations;

	return `${ firstOperand } ${ operator } ${ secondOperand }`;
};

const getResult = ({ state: { operations, result }}) => {
	const { firstOperand, secondOperand } = operations;

	const answer = secondOperand
		? eval(result)
		: firstOperand;

	return answer;
};

const doOperations = (context) => {
	const { actions, data } = context;

	actions.setOperator(data);
	actions.setResult();
};

const CalcManager = {
	addNumber,
	setOperator,
	setResult,
	getResult,
	doOperations,
};

export default CalcManager;
