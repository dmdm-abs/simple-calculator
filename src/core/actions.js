import CalcManager from '../services/CalcManager';

const addNumber = (context) => ({
	display: CalcManager.addNumber(context),
});

const setOperator = (context) => ({
	display: CalcManager.setOperator(context),
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
