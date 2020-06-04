import React from 'react';
import '../App.css';
import { Miniblock } from './Miniblock';

export function Skills() {
return (
    <div>
        <div className="TopicsName">
            <text>Skills</text></div>
        <div className=" BlockSkills">
            <div className="Skills BlockStyleGlass">
                <div className="SkillsTopic"><h2>Professional</h2></div>
                <ul>
                    <li>
                        <h4>HTML & CSS</h4>
                    </li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueHTML"></div>
                        </div>
                    </li>
                    <li>
                        <h4>Javascript</h4>
                    </li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueJS"></div>
                        </div>
                    </li>
                    <li><h4>React.js</h4></li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueReact"></div>
                        </div>
                    </li>
                    <li><h4>Node.js</h4></li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueNode"></div>
                        </div>
                    </li>
                    <li><h4>C</h4></li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueC"></div>
                        </div>
                    </li>
                    <li><h4>Photoshop</h4></li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValuePhotoshop"></div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="Skills BlockStyleGlass">
                <div className="SkillsTopic "><h2>Addition</h2></div>
                   <ul>
                        <li>
                        <span className="AdditionTopics">Teamwork</span>
                            <div className="ProgressBar" >
                                <div className="ProgressBarValue ValueHTML"></div>
                            </div>
                        </li>
                        <li>
                            <span className="AdditionTopics">Creativity</span>
                            <div className="ProgressBar" >
                                <div className="ProgressBarValue ValueJS"></div>
                            </div>
                        </li>
                        <li>
                        <span className="AdditionTopics">English</span>
                            <div className="ProgressBar" >
                                <div className="ProgressBarValue ValueReact"></div>
                            </div>
                        </li>
                    </ul>
                    <br></br>
                <div className="MiniBlockFlex">
                <Miniblock  name="Babel"/>
                <Miniblock  name="SCSS"/>
                <Miniblock  name="Bootstrap"/>
                <Miniblock  name="Git"/>
                <Miniblock  name="MongoDB"/>
                <Miniblock  name="SCSS"/>
                <Miniblock  name="Nosql"/>
                <Miniblock  name="Webpack"/>
                <Miniblock  name="SCSS"/>
                <Miniblock  name="SCSS"/>
                <Miniblock  name="SCSS"/>
                </div>
                </div>
        </div>
    </div>

);
}