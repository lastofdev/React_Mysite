import React from 'react';
import '../App.css';

export function MainInfo() {
return (
    <div>
        <div className="PhotoBlock BlockStyleGlass">
            <div className="Photo "></div>
            <div className="ShortContact ">
                <ul>
                    <li className="TextName">
                        <span>Samsonov Vladislav</span>
                    </li>
                    <li>
                        <span>Frontend developer</span>
                    </li>
                </ul>
                <ul className="Contact">
                    <li>helplike3d@yandex.ru</li>
                    <li>+7 (999) 095-24-01</li>
                    <li>Moscow</li>
                </ul>
            </div>
        </div>

    </div>

);
}