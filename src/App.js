import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Booklist from './components/Booklist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <Booklist />
      </div>
    );
  }

}

export default App;
