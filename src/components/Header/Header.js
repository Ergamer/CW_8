import React, {Component} from 'react';
import './Header.css';
import QuotesWindow from "../../components/QuotesWindow/QuotesWindow";
import {NavLink} from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div className="Header">
                <h1>Quotes Central</h1>
                <NavLink to="/QuotesWindow">Quotes</NavLink>
                <NavLink to="/second">Submit new quote</NavLink>
            </div>
        )
    }
}



export default Header;
