import { rndBetween, rndString } from '@laufire/utils/random';

const ten = 10;
const thirty = 30;
const hundred = 100;
const two = 4;
const sixteen = 16;

const boxService = {
	getPosition: ({ position }) => rndBetween(-position, position),

	createBox: ({ config }) => ({
		id: rndString(),
		position: [
			boxService.getPosition(config) / ten,
			boxService.getPosition(config) / thirty,
			boxService.getPosition(config) / hundred,
		],
		color: Math.random().toString(sixteen)
			.slice(two, ten),
	}),

	setBoxes: (context) =>
		context.state.boxes.concat(boxService.createBox(context)),

};

export default boxService;
