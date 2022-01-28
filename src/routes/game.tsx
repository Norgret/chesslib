import React, { useState } from 'react';

import { ChessboardView, ChessboardPreview } from '../components/chessboard-view';
import { CollapsibleDisplay } from '../components/game-view/collapsible-display';
import { MetadataTag } from '../components/game-view/metadata-tag';
import { MoveLabel } from '../components/game-view/move-label';
import { Annotation } from '../components/game-view/annotation';


// temporary
const ChessGame = {
	"id":"000",
	"gmName":"",
	"pgn":"",
	"moves":{
		1:[
			{"notation":"e4","fen":"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"},
			{"notation":"e5","fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2"}
		],
		2:[
			{"notation":"Nf3","fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2"},
			{"notation":"Nc6","fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3"}
		]
	}
};
const exampleGameJSON = JSON.stringify(ChessGame);
const exampleGame = JSON.parse(exampleGameJSON);
const moves = exampleGame.moves;


export default function Game() {

	const minSidebarWidth = 175;
	const startPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  // calculate if game-view-wrapper should wrap
  //  should wrap on mobile view
  function shouldWrap() {
    return window.innerHeight > (window.innerWidth - minSidebarWidth) ? "wrap" : "nowrap";
  }

  const [ viewState, setState ] = useState({
    viewClassName: `game-view-wrapper ${shouldWrap()}`,
  });

  const [ position, setPosition ] = useState({
  	moveNumber: 0,
  	moveTurn: 1,
  	FEN: startPosition
  });

  function incrementMoveNumber(n: number) {

  }

  // Returns an array of <MoveLabels> populated by JSON data
  function getMoveLabels() {
  	let moveLabels = [];
  	for (const keyString in moves) {
  		const key = parseInt(keyString); // have to parse key to Number because moveNumber accepts type Number
  		const move = moves[key];

  		moveLabels.push(
  			<MoveLabel moveNumber={key}
  				white={{
  					label: move[0].notation,
  					onClick: () => {
  						setPosition({moveNumber: key, moveTurn: 0, FEN: move[0].fen});
  						// setMoveState({number: key, turn: 0});
  					}
  				}}
  				black={{
  					label: move[1].notation,
  					onClick: () => {
	  					setPosition({moveNumber: key, moveTurn: 1, FEN: move[1].fen});
	  					// setMoveState({number: key, turn: 1});
	  				}
  				}}
  			/>
			);
  	}

  	return moveLabels;
  }


  return (

    <div className={viewState.viewClassName}>
      <ChessboardView
				FEN={position.FEN}

				menuClickHandler={() => {

				}}

				nextMove={() => {

					if (position.moveTurn === 0) {	// if White's turn
						if (moves[position.moveNumber][1]) {	// test boundary condition
							setPosition({...position,
								moveTurn: 1,	// next move is Black's
								FEN: moves[position.moveNumber][1].fen
							});
						}
					}

					else {	// if Black's turn
						if (moves[position.moveNumber + 1]) {	// test boundary condition
							setPosition({
								moveTurn: 0,	// next move is White's
								moveNumber: position.moveNumber + 1,
								FEN: moves[position.moveNumber + 1][0].fen
							});
						}
					}

				}}

				lastMove={() => {

					if (position.moveTurn === 0) {	// if White's turn
						if (moves[position.moveNumber - 1]) {	// test boundary condition
							setPosition({
								moveNumber: position.moveNumber - 1,
								moveTurn: 1,	// next move is White's
								FEN: moves[position.moveNumber - 1][1].fen
							});
						}
					}

					else {	// if Black's's turn
						setPosition({...position,
							moveTurn: 0,	// next move is Black's
							FEN: moves[position.moveNumber][0].fen
						});
					}

				}}

				firstMove={() => {
					setPosition({...position,
						moveNumber: 0,
						moveTurn: 1,
						FEN: startPosition
					})
				}}

				endMove={() => {

				}}

				postClickHandler={() => {

				}}

				annotate={() => {

				}}
      />

      <div className="gameInfoDisplay">

        <CollapsibleDisplay label="Metadata">
        	<div className="metadata-display">
        		<MetadataTag attribute="Date" value="????.??.??" />
        		<MetadataTag attribute="Site" value="somewhere" />
        	</div>
        </CollapsibleDisplay>

        <CollapsibleDisplay label="Moves">
          <div className="moves-display">
           	{getMoveLabels()}
          </div>
        </CollapsibleDisplay>

        <CollapsibleDisplay label="Notes">
        {/* contains <Annotation />[] */}
        </CollapsibleDisplay>

      </div>
    </div>

  );
}