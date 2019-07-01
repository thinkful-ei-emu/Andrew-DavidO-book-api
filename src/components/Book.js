import React from 'react';

function Book(props) {
  return <>
    <div>
      <p>{props.title}</p>
      <p>{props.authors}</p>
      <p>{props.kind}</p>
      {props.saleInfo.retailPrice && <p>{props.saleInfo.retailPrice.amount}</p>}
      <img src={props.thumbnail} alt={`${props.title}-thumbnail`}></img>
      <p>{props.description}</p>
    </div>
  </>
}

export default Book;