import React from 'react';
import '../App.css';

export function Miniblock(props) {
return (
    <div className="Miniblock">
        <div className="MiniblockStyle">
          <span>{props.name}</span>
        </div>
    </div>

);
}
