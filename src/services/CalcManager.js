const addNumber = ({ state: { display }, data: number }) => {
	const { operator } = display;
	const operand = operator ? 'secondOperand' : 'firstOperand';

	return {
		...display,
		[operand]: display[operand].concat(number),
	};
};

const setOperator = ({ state: { display }, data }) => {
	const { firstOperand } = display;

	const firstOperandValue = firstOperand || '0';

	return {
		...display,
		firstOperand: firstOperandValue,
		operator: data,
	};
};

const getResult = ({ state: { display }}) => {
	const { firstOperand, secondOperand, operator } = display;

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
