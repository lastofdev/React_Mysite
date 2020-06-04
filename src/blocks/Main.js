import React from 'react';
import '../App.css';

export function MainInfo() {
return (
    <div>
        <div className="PhotoBlock BlockStyleGlass">
            <div className="Photo"></div>
            <div className="ShortContact">
                <ul>
                    <li className="TextName">
                        <b>Самсонов Владислав</b>
                    </li>
                    <li>
                        <text>Frontend developer</text>
                    </li>
                </ul>
                <ul className="Contact">
                    <li>helplike3d@yandex.ru</li>
                    <li>+7 (999) 095-24-01</li>
                    <li>Москва</li>
                </ul>
            </div>
        </div>

    </div>

);
}