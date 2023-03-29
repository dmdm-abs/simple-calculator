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

const getResult = (context) => ({
	result: CalcManager.getResult(context),
});

const actions = {
	addOperand,
	setOperator,
	setResult,
	getResult,
};

export default actions;
