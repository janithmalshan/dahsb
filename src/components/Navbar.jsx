import React, {Component} from 'react';
import user from '../assets/icons/account_circle-24px.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="ui-navbar">
                <label>DASHBOARD.IO</label>
                <img src={user} height={30}/>
            </div>
        );
    }
}

export default Navbar;
