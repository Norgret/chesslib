import React, { useState } from 'react';

import { ChessboardView, ChessboardPreview } from '../components/chessboard-view';
import { CollapsibleDisplay } from '../components/game-view/collapsible-display';
import { MetadataTag } from '../components/game-view/metadata-tag';
import { MoveLabel } from '../components/game-view/move-label';
import { Annotation } from '../components/game-view/annotation';


export default function Game() {

	const minSidebarWidth = 175;

  // calculate if game-view-wrapper should wrap
  //  should wrap on mobile view
  function shouldWrap() {
    return window.innerHeight > (window.innerWidth - minSidebarWidth) ? "wrap" : "nowrap";
  }

  const [ viewState, setState ] = useState({
    viewClassName: `game-view-wrapper ${shouldWrap()}`,
    boardPosition: "2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50"
  });


  return (

    <div className={viewState.viewClassName}>
      <ChessboardView
        FEN={viewState.boardPosition}
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
            <MoveLabel moveNumber={1} white="e4" black="e5" />
            <MoveLabel moveNumber={2} white="Nf3" black="Nc6" />
            <MoveLabel moveNumber={3} white="Bc4" />
          </div>
        </CollapsibleDisplay>

        <CollapsibleDisplay label="Notes">
        {/* contains <Annotation />[] */}
        </CollapsibleDisplay>

      </div>
    </div>

  );
}