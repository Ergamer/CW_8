import React, { Component } from 'react';
import './SubmitNewQuote.css';
import axios from 'axios';

class SubmitNewQuote extends Component {
    state = {
        quotes: {
          title: '',
          body: ''
        },
    };

    quoteSubmitAction = (event) => {
        event.preventDefault();

        axios.post('./notes.json', this.state.quotes).then(() => {
            this.props.history.replace('/');
        });
    };
    quoteValueChanged = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                quotes: {...prevState.quotes, [event.target.name]: event.target.value}
            };
        });
    };

    render() {
        return (
            <form className="SubmitNewQuote">
                <select>
                    <option value="All">All</option>
                    <option value="Famous">Famous</option>
                    <option value="Humour">Humour</option>
                </select>
                <input type="text" name="title"
                       placeholder="Enter author name"
                       value={this.state.quotes.title}
                       onChange={this.quoteValueChanged}
                />
                <textarea name="body"
                          placeholder="Enter quote text"
                          value={this.state.quotes.body}
                          onChange={this.quoteValueChanged}
                >
                </textarea>
                <button onClick={this.quoteSubmitAction}>Save</button>
            </form>
        );
    }
}


export default SubmitNewQuote;
