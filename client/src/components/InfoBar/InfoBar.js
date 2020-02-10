import React from 'react';

import onLineIcon from '../../icons/onLineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
<img className="onLineIcon" src={onLineIcon} alt="online indicator" />
<h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon}alt="close icon" /></a>
    </div>
    </div>
);

export default InfoBar;