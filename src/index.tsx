import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GameBoard } from "./components/gameboard";

ReactDOM.render(
    <div>
        <GameBoard numberOfCards={4} />
    </div>,
    document.getElementById("container")
);