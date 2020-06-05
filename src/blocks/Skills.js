import React from 'react';
import '../App.css';
import { Miniblock } from './Miniblock';
import { Works } from './Works';

export function Skills() {
return (
    <div>
        <div className="TopicsName">
            <text>Skills</text></div>
        <div className="BlockSkills">
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
                    <li><h4>Git</h4></li>
                    <li>
                        <div className="ProgressBar" >
                            <div className="ProgressBarValue ValueNode"></div>
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
                <div className="SkillsTopicAddition "><h2>Addition</h2></div>
                   <ul>
                        <li>
                        <h4>Teamwork</h4>
                            <div className="ProgressBar" >
                                <div className="AdditionProgressBarValue ValueTeamwork"></div>
                            </div>
                        </li>
                        <li>
                            <h4>Creativity</h4>
                            <div className="AdditionProgressBar" >
                                <div className="AdditionProgressBarValue ValueCreativity"></div>
                            </div>
                        </li>
                        <li>
                        <h4>English</h4>
                            <div className="ProgressBar" >
                                <div className="AdditionProgressBarValue ValueEnglish"></div>
                            </div>
                        </li>
                    </ul>
                  
                    <div className="MiniBlockFlex">
                        <Miniblock  name="Node.js"/>
                        <Miniblock  name="SCSS"/>
                        <Miniblock  name="Bootstrap"/>
                        <Miniblock  name="SVG"/>
                        <Miniblock  name="MongoDB"/>
                        <Miniblock  name="БЭМ"/>
                        <Miniblock  name="Nosql"/>
                        <Miniblock  name="C"/>
                        <Miniblock  name="REST"/>
                        <Miniblock  name="Webpack"/>
                        <Miniblock  name="Flex"/>
                        <Miniblock  name="Express"/>
                        <Miniblock  name="AJAX"/>
                    </div>
                </div>
                <Works />
        </div>
        
    </div>

);
}