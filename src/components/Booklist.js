import React from 'react';
import Book from './Book'

function Booklist(props) {
  if (!props.booklist){
    return <div> No Results Found! Try again!</div>
  }
  const booklist = props.booklist.map(book => {
    return <Book
      key={book.id}
      saleInfo = {book.saleInfo}
      kind = {book.kind}
      title = {book.volumeInfo.title}
      authors = {book.volumeInfo.authors}
      description = {book.volumeInfo.description}
      thumbnail = {book.volumeInfo.imageLinks.thumbnail}

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