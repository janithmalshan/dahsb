import React, {Component} from 'react';
import logo from '../logo.svg'

function ContentBar(props) {
    return (
        <div className="ui-contentbar">
            <div></div>

            <h1 className="ui-contentbar__title"><img src={logo} height={40}/>alerting-check-policy-conditions{props.title}</h1>
        </div>
    );
}


export default ContentBar;
