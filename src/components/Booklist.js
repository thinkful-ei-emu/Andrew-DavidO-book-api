import React from 'react';
import Book from './Book'

function Booklist(props) {
  return <>
    <div>Booklist
      <ul>
        {
          props.booklist.map(book => {
          return <Book/>
          })
        }
      </ul>
    </div>


  </>
}

export default Booklist;