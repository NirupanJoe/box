/* eslint-disable no-magic-numbers */
import React from 'react';
import { a, config, useSprings } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const Box = ({ context: { state: { boxes }}}) => {
	const springs = useSprings(boxes.length, boxes.map((item) => ({
		loop: true,
		from: {
			rotation: [0, 0, 0],
			position: item.position,
			color: `#${ item.color }`,
		},
		rotation: [0, 360, 0],
		config: config.slow,
	})));

	return (
		<group>
			{springs.map(({ rotation, position, color }) =>
				<a.mesh
					key={ rotation.id }
					rotation={ rotation }
					position={ position }
				>
					<boxBufferGeometry/>
					<a.meshStandardMaterial color={ color }/>
				</a.mesh>)}
		</group>
	);
};

export default Box;
