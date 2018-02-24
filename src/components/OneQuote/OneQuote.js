import React, { Component } from 'react';
import './OneQuote.css';


class OneQuote extends Component {

    render() {
        return (
            <div className="OneQuote">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <p>{props.author}</p>
                <button onClick={this.props.oneQuoteEditAction}>Edit a quote</button>
                <button onClick={this.props.removeQuote}>Remove a quote</button>
            </div>
        )
    }
}


export default OneQuote;