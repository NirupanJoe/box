/* eslint-disable no-magic-numbers */
import React from 'react';
import { useTransition, a, config } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const Box = ({ context: { state: { boxes }}}) => {
	const transitions = useTransition(boxes, {
		loop: true,
		from: {
			rotation: [0, 0, 0], position: [0, 0, 0], color: 'black',
		},
		enter: (item) => ({
			rotation: [0, 360, 0],
			position: item.position,
			color: `#${ item.color }`,
		}),
		keys: (item) => item.id,
		config: config.slow,
	});

	return (
		<group>
			{transitions(({ rotation, position, color }) =>
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
