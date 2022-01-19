import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';

class Window {
	static getWidth() {
		return window.innerWidth;
	}
	static getHeight() {
		return window.innerHeight;
	}
}


type ChessboardProps = {
	FEN?: string;
}

function BaseChessboard({ FEN }: ChessboardProps) {
	// array destructuring syntax
	// useState hook returns [ currentState, (newState) => {setState(newState)} ]
	const [ state, setState ] = useState({FEN: FEN});
}


export function ChessboardView({ FEN }: ChessboardProps) {

	const toolbarHeight = 75;

	// return chessboard dimensions that fill window
	// desktop view: chessboard fills vertical space
	// mobile view: chessboard fills horizontal space
	function calculateChessboardWidth() {
		if (window.innerHeight < window.innerWidth) {
			return window.innerHeight - toolbarHeight;
		}
		else if (window.innerHeight >= window.innerWidth) {
			return window.innerWidth;
		}
	}

	// array destructuring syntax
	// useState hook returns [ currentState, (newState) => {setState(newState)} ]
	const [ state, setState ] = useState({FEN: FEN});

	return (
		<div className="chessboard-view">

      <Chessboard
      	// set width of Chessboard to fill window
        width={calculateChessboardWidth()}
        position={state.FEN}
      />

      <div className="toolbar" style={{height: toolbarHeight}}>
      	buttons here
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