import CalcManager from '../services/CalcManager';

const addNumber = (context) => ({
	operations: CalcManager.addNumber(context),
});

const setOperator = (context) => ({
	operations: CalcManager.setOperator(context),
});

const getResult = (context) => ({
	result: CalcManager.getResult(context),
});

const actions = {
	addNumber,
	setOperator,
	getResult,
};

export default actions;
