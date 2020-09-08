import React, {Component} from 'react';
import logo from '../logo.svg'

function ContentBar(props) {
    return (
        <div className="ui-contentbar">
            <div className="ui-contentbar__nav">
                <label>Dashboard.io</label>
                <label>→</label>
                <label>US-east-1</label>
                <label>→</label>
                <label>sqs</label>
                <div className="ui-contentbar__nav--right">
                    <a className="link">AWS console</a>
                    <a className="link">configuration</a>
                </div>
            </div>
            <h1 className="ui-contentbar__title"><img src={logo} height={40}/>alerting-check-policy-conditions{props.title}</h1>
        </div>
    );
}


export default ContentBar;
