import React from 'react';

function Book(props) {
  return <>
    <div>{props.title}
          {props.authors}
          {props.kind}
          {props.retailPrice}
          {props.thumbnail}
          {props.description}
    </div>
  </>
}

export default Book;