import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';


type ChessViewProps = {
	FEN: string;
	menuClickHandler: () => void;
	nextMove: () => void;
	lastMove: () => void;
	firstMove: () => void;
	endMove: () => void;
	postClickHandler: () => void;
	annotate: () => void;
}


// export function ChessboardView({gameData, moveNumber, moveTurn}: ChessViewProps) {
export function ChessboardView(props: ChessViewProps) {
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
        draggable={false}
        position={props.FEN}
      />

      <div className="toolbar" style={{height: toolbarHeight}}>
	      <button className="btn menu" onClick={
      		() => {props.menuClickHandler()}
      	}><i className="fa fa-bars"></i>
      	</button>
      	<div className="btn divider"></div>
      	<button className="btn back" onClick={
      		() => {props.firstMove()}
      	}><i className="fa fa-backward"></i>
      	</button>
      	<button className="btn back-step" onClick={
      		() => {props.lastMove()}
      	}><i className="fa fa-step-backward"></i>
      	</button>
      	<button className="btn forward-step" onClick={
      		() => {props.nextMove()}
      	}><i className="fa fa-step-forward"></i>
      	</button>
      	<button className="btn forward" onClick={
      		() => {props.endMove()}
      	}><i className="fa fa-forward"></i>
      	</button>
      	<div className="btn divider"></div>
      	<button className="btn post" onClick={
      		() => {props.postClickHandler()}
      	}><i className="fa fa-send"></i>
      	</button>
      	<button className="btn annotate" onClick={
      		() => {props.annotate()}
      	}><i className="fa fa-pencil-square-o"></i>
      	</button>
      </div>

    </div>
	);
}



type ChessPreviewProps = {
	FEN: string;
}

export function ChessboardPreview({ FEN }: ChessPreviewProps) {
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