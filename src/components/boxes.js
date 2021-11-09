import Box from './box';

const Boxes = (context) =>
	context.state.boxes.map((data) => Box(data, context));

export default Boxes;
