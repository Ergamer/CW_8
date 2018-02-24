import React, { Component } from 'react';
import './AllQuotes.css';
import OneQuote from "../../components/OneQuote/OneQuote";
import axios from 'axios';

class AllQuotes extends Component {
    state = {
      quotes: []
    };

  componentDidMount () {
      axios.get('/quotes.json').then((response) => {
          const quote = [];
      for(let key in response.data) {
          quote.push({...response.data[key], id: key})
      }
            this.setState({quote})
      });
  }

   removeQuote = (id) => {
        const index = this.state.tasks.findIndex(p => p.id === id);
        const bulb = [...this.state.tasks];
        bulb.splice(index, 1);

        this.setState({tasks: bulb});
    };


    render() {
        return (
           <div className="AllQuotes">
               {this.state.quotes.map(quote => <OneQuote
                    title={quote.title}
                    text={quote.text}
                    author={quote.author}
                   oneQuoteEditAction={this.oneQuoteEditAction}
                   removeQuote={this.removeQuote}
               />)}
           </div>
        );
    }
}

export default AllQuotes;

