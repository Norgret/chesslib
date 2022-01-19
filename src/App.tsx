import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/css/main.css';
import './styles/css/board.css';
import './styles/css/game-view.css';

import { ChessboardView, ChessboardPreview } from './components/chessboard-view';
import { ChessGamePreview } from './components/chess-game-preview';


function App() {

  const minSidebarWidth = 250;

  // calculate if game-view-wrapper should wrap
  //  should wrap on mobile view
  function shouldWrap() {
    return window.innerHeight > (window.innerWidth - minSidebarWidth) ? "wrap" : "nowrap";
  }

  const [ viewState, setState ] = useState({
    viewClassName: `game-view-wrapper ${shouldWrap()}`
  });


  return (

    <div className={viewState.viewClassName}>
      <ChessboardView
        FEN="2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50"
      />

      <div className="gameInfoDisplay">

        <div className="metadataContainer">
          metadata tag: value
          {/* contains plaintext parsed metadata */}
        </div>

        <div className="movesDisplay">
          {/* contains <MoveNumber />[] */}
        </div>

        <div className="annotationsContainer">
          annotation
          {/* contains <Annotation />[] */}
        </div>

      </div>
    </div>

  );
}


export default App;
