import React from 'react';

const boxSize = 0.5;

const Box = ({ id, position }) => {
	// eslint-disable-next-line no-console
	console.log(position);

	return (
		<mesh
			key={ id }
			position={ position }
		>
			<boxGeometry args={ [boxSize, boxSize, boxSize] }/>
			<meshStandardMaterial color="tomato"/>
		</mesh>
	);
};

export default Box;
