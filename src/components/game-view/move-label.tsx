import React, { useState } from 'react';

type MoveLabelProps = {
	moveNumber: number;
	white: string;
	black?: string;	// if {black} is undefined, return "#. {white} ..."
}

export function MoveLabel(props: MoveLabelProps) {
	const [ state, setState ] = useState({});

	return (
		<div className="move-label-container">
			<div className="text move-number">
				{props.moveNumber}.
			</div>
			<div className="text move-label white-move">
				{props.white}
			</div>
			<div className="text move-label white-move">
				{props.black ? props.black : '...'}
			</div>
		</div>
	);
}