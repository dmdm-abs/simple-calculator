import CalcManager from '../services/CalcManager';

const addOperand = (context) => ({
	operations: CalcManager.addOperand(context),
});

const setOperator = (context) => ({
	operations: CalcManager.setOperator(context),
});

const setResult = (context) => ({
	result: CalcManager.setResult(context),
});

const calcResult = (context) => ({
	result: CalcManager.calcResult(context),
});

const actions = {
	addOperand,
	setOperator,
	setResult,
	calcResult,
};

export default actions;
