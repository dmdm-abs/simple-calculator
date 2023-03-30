import CalcManager from '../services/CalcManager';

const addOperand = (context) => ({
	operations: CalcManager.addOperand(context),
});

const setOperator = (context) => ({
	operations: CalcManager.setOperator(context),
});

const displayResult = (context) => ({
	result: CalcManager.displayResult(context),
});

const calcResult = (context) => ({
	result: CalcManager.calcResult(context),
	operations: CalcManager.updateOperations(context),
});

const actions = {
	addOperand,
	setOperator,
	displayResult,
	calcResult,
};

export default actions;
