import React from 'react';
import '../App.css';

export function Header() {
return (
    <div className="HeaderBackground">
        <div className="HeaderElements">
            <text>Samsonov</text>
            <ul className="HeaderRightMenu">
               <li> <text>Резюме</text></li>
               <li> <text>База знаний</text></li>
               <li> <text>Тема</text></li>
            </ul>
        </div>
    </div>

);
}
