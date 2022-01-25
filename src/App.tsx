import React, { useState } from 'react';
import logo from './logo.svg';

import { ChessboardView, ChessboardPreview } from './components/chessboard-view';
import { ChessGamePreview } from './components/chess-game-preview';

import { CollapsibleDisplay } from './components/game-view/collapsible-display';
import { MoveLabel } from './components/game-view/move-label';
import { Annotation } from './components/game-view/annotation';

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

        <CollapsibleDisplay label="Metadata">
          <div className="text">text</div>

          {/* contains plaintext parsed metadata */}
        </CollapsibleDisplay>

        <CollapsibleDisplay label="Moves">
        {/* contains <MoveLabel />[] */}
          <MoveLabel moveNumber={1} white="e4" black="e5" />
          <MoveLabel moveNumber={2} white="Nf3" black="Nc6" />
          <MoveLabel moveNumber={3} white="Bc4" />
        </CollapsibleDisplay>

        <CollapsibleDisplay label="Notes">
        {/* contains <Annotation />[] */}
        </CollapsibleDisplay>

      </div>
    </div>

  );
}


export default App;
