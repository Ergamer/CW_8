import React, { Component } from 'react';
import './QuotesWindow.css';
import axios from 'axios';

class QuotesWindow extends Component {
    state = {
        quotes: []
    };

    componentDidMount () {
        axios.get('/quotes.json').then((response) => {
            const quotes = [];
            for(let key in response.data) {
                quotes.push({...response.data[key], id: key})
            }
            this.setState({quotes})
        });
    }

    render() {
        return (
            <div className="QuotesWindow">

            </div>
        );
    }
}

export default QuotesWindow;


