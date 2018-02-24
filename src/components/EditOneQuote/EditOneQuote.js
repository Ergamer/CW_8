import React, { Component } from 'react';
import './EditOneQuote.css';


class EditOneQuote extends Component {

    state = {
        quotes: {
            title: '',
            body: ''
        },
    };

    oneQuoteEditAction = (event) => {
        event.preventDefault();

        axios.post('./notes.json', this.state.quotes).then(() => {
            this.props.history.replace('/');
        });
    };

    oneQuoteValueChanged = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                quotes: {...prevState.quotes, [event.target.name]: event.target.value}
            };
        });
    };

    render() {
        return (
            <form className="EditOneQuote">
                <select>
                    <option value="All"></option>
                    <option value="Famous"></option>
                    <option value="Humour"></option>
                </select>
                <input type="text" name=""
                       placeholder="Enter author name"
                       value={this.state.quotes.title}
                       onChange={this.oneQuoteValueChanged}
                />
                <textarea name="body"
                          placeholder="Enter quote text"
                          value={this.state.quotes.body}
                          onChange={this.oneQuoteValueChanged}
                >
                </textarea>
                <button onClick={this.oneQuoteEditAction}>Save</button>
            </form>
        )
    }
}


export default EditOneQuote;
