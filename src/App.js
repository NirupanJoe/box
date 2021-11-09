import { React } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import Boxes from './components/boxes';
import boxService from './services/boxService';

const App = (context) => {
	const { patchState } = context;

	// eslint-disable-next-line no-console
	console.log(context);

	return (
		<div
			className="App"
			role="App"
			onClick={ () =>
				patchState({ boxes: boxService.setBoxes(context) }) }
		>
			<Canvas>
				<ambientLight/>
				{ Boxes(context) }
			</Canvas>
		</div>
	);
};

export default App;
