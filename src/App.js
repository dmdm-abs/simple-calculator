import { React } from 'react';
import './App.scss';
import Calculator from './components/Calculator';

const App = (context) =>
	<div className="App">
		<Calculator { ...context }/>
	</div>;

export default App;
