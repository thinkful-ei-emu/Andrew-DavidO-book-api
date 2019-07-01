import React from 'react';
import Book from './Book'

function Booklist(props) {
  const booklist = props.booklist.map(book => {
    return <Book
      key={book.id}
      />
  });

  return <>
    <div>Booklist
      <ul>
        {booklist}
      </ul>
    </div>
  </>
}

export default Booklist;