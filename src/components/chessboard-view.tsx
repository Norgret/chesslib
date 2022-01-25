import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBackwardStep, faBackwardFast, faForwardStep, faForwardFast } from '@fortawesome/free-solid-svg-icons';

type ChessboardProps = {
	FEN?: string;
}


export function ChessboardView({ FEN }: ChessboardProps) {
	// array destructuring syntax
	// useState hook returns [ currentState, (newState) => {setState(newState)} ]
	const [ state, setState ] = useState({FEN: FEN});

	const toolbarHeight = 75;

	// return chessboard dimensions that fill window
	// desktop view: chessboard fills vertical space
	// mobile view: chessboard fills horizontal space
	function calculateChessboardWidth() {
		if (window.innerHeight <= window.innerWidth) {
			return window.innerHeight - toolbarHeight;
		}
		else if (window.innerHeight > window.innerWidth) {
			return window.innerWidth;
		}
	}

	return (
		<div className="chessboard-view">

      <Chessboard
      	// set width of Chessboard to fill window
        width={calculateChessboardWidth()}
        position={state.FEN}
      />

      <div className="toolbar" style={{height: toolbarHeight}}>
	      <button className="btn home">
      		<i className="fa-solid fa-home"></i>
      	</button>
      	<button className="btn back">
      		<i className="fa-solid fa-backward-fast"></i>
      	</button>
      	<button className="btn back-step"></button>
      	<button className="btn forward-step"></button>
      	<button className="btn forward"></button>
      </div>

    </div>
	);
}



export function ChessboardPreview({ FEN }: ChessboardProps) {
	const [ state, setState ] = useState({FEN: FEN});

	return (
		<div className="chessboard-preview">
      <Chessboard
        width={200}
        position={state.FEN}
      />
    </div>
	);
}