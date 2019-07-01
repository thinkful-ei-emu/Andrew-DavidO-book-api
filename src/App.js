import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Booklist from './components/Booklist';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.BASE_URL = 'https://www.googleapis.com/books/v1/volumes?';

    this.state = {
      booklist: {
        kind: '',
        totalItems: '',
        items: []
      }
    }
    this.query = {
      q: 'search title',
      printTyle: 'book',
      filter: 'ebook'
    }
  }

  mapQueryToString(queryObj) {
    let {q, ...optional} = queryObj;

    let queryString = `q=${q}`;

    Object.keys(optional).forEach(key => {
      queryString += `&${key}=${optional[key]}`
    });

    console.log(queryString);

    return queryString;
  }

  fetchBooks = async (queryObj) => {

    const query = this.mapQueryToString(queryObj);

    console.log('query', `${this.BASE_URL}${query}`);

    try {
      let booklist = await fetch(`${this.BASE_URL}${(query)}`);
      booklist = await booklist.json();

      console.log(booklist);

      this.setState({
        booklist
      });  
    } catch(e) {
      console.error(e.message);
    }
  }

  render() {

    return (
      <div className="App">
        <Searchbar fetchBooks={this.fetchBooks}/>
        <Booklist booklist={this.state.booklist.items}/>
      </div>
    );
  }

}

export default App;
