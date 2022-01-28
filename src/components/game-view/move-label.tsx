import React, { useState } from 'react';


//
// When clicked, MoveButton updates state of board and highlights relevant Annotations
//
type MoveButtonProps = {
	label: string | undefined;
	onClick: () => void;
}

function MoveButton(props: MoveButtonProps) {
	return (
		<button className="btn text bold label move-label" onClick={ () => {props.onClick()} }>
			{props.label}
		</button>
	);
}

//
// Move Label looks like: #. [white's move] [black's move]
//
type MoveLabelProps = {
	moveNumber: number;
	white: MoveButtonProps;
	black: MoveButtonProps;
}

export function MoveLabel(props: MoveLabelProps) {
	const [ state, setState ] = useState({
		isActive: false
	});

	return (
		<div className="move-label-container">
			<div className="text label move-number">
				{props.moveNumber}.
			</div>
			<MoveButton label={props.white.label} onClick={ () => {props.white.onClick()} } />
			<MoveButton label={props.black.label} onClick={ () => {props.black.onClick()} } />
		</div>
	);
}