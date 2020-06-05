import React from 'react';
import '../App.css';

export function Header() {
return (
    <div className="HeaderBackground">
        <div className="HeaderElements">
            <span className="LogoName"></span>
            <ul className="HeaderRightMenu">
               <li> <span className="HeaderLink">Portfolio</span></li>
               <li> <span className="HeaderLink">Dark</span></li>
            </ul>
        </div>
    </div>

);
}
