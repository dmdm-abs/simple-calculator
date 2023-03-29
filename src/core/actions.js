import CalcManager from '../services/CalcManager';

const addNumber = (context) => ({
	display: CalcManager.addNumber(context),
});

const setOperator = (context) => ({
	display: CalcManager.setOperator(context),
});

const actions = {
	addNumber,
	setOperator,
};

export default actions;
