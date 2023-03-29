const addNumber = ({ state: { display }, data: number }) => {
	const { operator } = display;
	const operand = operator ? 'secondOperand' : 'firstOperand';

	return {
		...display,
		[operand]: display[operand].concat(number),
	};
};

const CalcManager = {
	addNumber,
};

export default CalcManager;
