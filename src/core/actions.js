import CalcManager from '../services/CalcManager';

const addNumber = (context) => ({
	display: CalcManager.addNumber(context),
});

const actions = {
	addNumber,
};

export default actions;
