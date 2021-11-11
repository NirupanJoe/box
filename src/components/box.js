/* eslint-disable no-magic-numbers */
import React from 'react';
// import { useFrame } from '@react-three/fiber';

const Box = ({ id, position }, ref) =>
// useFrame(() => (ref.current.rotation.x += 0.01));

	<mesh
		key={ id }
		ref={ ref }
		position={ position }
	>
		<sphereBufferGeometry args={ [1, 64, 64] }/>
		<meshStandardMaterial color="tomato"/>
	</mesh>;

export default Box;
