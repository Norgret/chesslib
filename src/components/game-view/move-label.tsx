import React, { useState } from 'react';

type MoveLabelProps = {
	moveNumber: number;
	white: string;
	black?: string;
}

export function MoveLabel(props: MoveLabelProps) {
	const [ state, setState ] = useState({});

	return (
		<div className="move-label-container">
			<div className="text label move-number">
				{props.moveNumber}.
			</div>
			<button className="btn text bold label move-label white-move">
				{props.white}
			</button>
			<button className="btn text bold label move-label white-move">
				{props.black ? props.black : ''}
			</button>
		</div>
	);
}